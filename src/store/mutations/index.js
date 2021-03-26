import appMutations from '../pluggableUnit/editor/mutations/appMut'
import authMutations from '../pluggableUnit/editor/mutations/authMut'
import projectMutations from '../pluggableUnit/editor/mutations/projectMut'
import pageMutations from '../pluggableUnit/editor/mutations/pageMut'
import elementMutations from '../pluggableUnit/editor/mutations/elementMut'
import componentMutations from '../pluggableUnit/editor/mutations/componentMut'

/**
 * Vuex Store Mutations
 *
 * @constant
 * @type {object}
 * @see {@link https://vuex.vuejs.org/en/mutations.html|Vuex Mutations}
 */
const mutations = {
  /**
   * Saves the initial state for the redo/undo functionality
   */
  initializeState: function (state) {
    console.debug('Base state saved')
  },
  ...appMutations,
  ...authMutations,
  ...projectMutations,
  ...pageMutations,
  ...elementMutations,
  ...componentMutations
}

export default mutations
