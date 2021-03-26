import localforage from 'localforage'
import * as download from 'downloadjs'
import newState from '@/store/pluggableUnit/editor/factories/stateFactory'
import types from '@/store/types'
import store from '@/store'

const projectActions = {
/**
 * Checks if the current project definition (in base64)
 * is the same as the last one saved in GH (also stored in local as base64)
 *
 * As an extra, saves the current b64 project in local as well (as a checkpoint)
 *
 * TODO: review all this check/save workflow since it may get real heavy
 * (alternatives... check after certain time, if there's been changes?)
 */
  [types.checkLastSaved]: async function ({ state, dispatch, commit }) {
    const currentProjectB64 = btoa(JSON.stringify(state.project))
    let lastSavedProjectB64 = await localforage.getItem('gh-last-saved')

    if (currentProjectB64 === lastSavedProjectB64) {
      commit(types._toggleHasChanges, false)
    } else {
      commit(types._toggleHasChanges, true)
    }

    dispatch(types.syncLocal, currentProjectB64)
  },

/**
 * Syncronizes the local cache of the project definition
 *
 * @param  {string|null} [projectB64] [description]
 */
  [types.syncLocal]: async function ({ state, commit }, projectB64) {
    commit(types._toggleIsSyncing, true)

    let pB64 = projectB64
    if (!pB64) { pB64 = btoa(JSON.stringify(state.project)) }

    await localforage.setItem('local-checkpoint', pB64)
    commit(types._toggleIsSyncing, false)
  },

/**
 * Uploads the vuegg project definition to github
 * and saves one copy in local storage
 * 可能不用！！！！！！！！！！！！！
 *
 * @param  {string} repoName : name of the repository where to save the vuegg project
 */
  [types.uploadProjectToGH]: async function ({ state, commit }, { repoName }) {
    commit(types._toggleLoadingStatus, true)
    const project = state.project
    const projectB64 = btoa(JSON.stringify(project))
    localforage.setItem('gh-last-saved', projectB64)
    localforage.setItem('gh-repo-name', repoName)
    commit(types._toggleLoadingStatus, false)
  },

/**
 * Downloads the current vuegg project definition as a .gg (base64 json) file
 *
 * @return {download} : [project-name].gg file containing the vuegg project definition
 */
  [types.downloadProject]: async function ({ state, commit }) {
    commit(types._toggleLoadingStatus, true)

    const parsedRepoName = state.project.title.replace(/[^a-zA-Z0-9-_]+/g, '-')
    const projectB64 = btoa(JSON.stringify(state.project))
    download(projectB64, parsedRepoName + '.gg', 'appliction/json')

    commit(types._toggleLoadingStatus, false)
  },

/**
 * Loads a previously saved vuegg project.
 * If origin is not passed through, the project will load from local by default
 *
 * @param {string} origin : From where the project is beign loaded (local, pc, github)
 * @param {string|null} [owner] : (github-origin) Github login (username) of the repository
 * @param {string|null} [repo] : (github-origin) Repository name from where to fetch project (vue.gg)
 * @param {string|null} [repo] : (github-origin) Repository name from where to fetch project (vue.gg)
 * @param {string|null} [content] : (pc-origin) The content of the selected file
 */
  [types.loadVueggProject]: async function ({ commit }, { origin, repoName, content }) {
    commit(types._toggleBlockLoadingStatus, true)

    let project
    switch (origin) {
      case 'local': project = await localforage.getItem('local-checkpoint'); break
      case 'pc': project = content; break
      default: project = await localforage.getItem('local-checkpoint')
    }

    if (project) {
      store.replaceState(newState(JSON.parse(atob(project))))
      commit(types.addProject)
      if (origin === 'github') localforage.setItem('gh-repo-name', repoName)
    }
    commit(types._toggleBlockLoadingStatus, false)
  },

/**
 * Clears the editing project from vuegg and replaces it with a plain one.
 * (or better to say, resets vuegg to initial state)
 */
  [types.clearProject]: async function ({ commit }) {
    commit(types._toggleBlockLoadingStatus, true)
    store.replaceState(newState())
    commit(types.deleteProject)
    commit(types._toggleBlockLoadingStatus, false)
  }
}

export default projectActions
