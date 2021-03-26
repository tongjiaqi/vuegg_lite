/*
 * @Author: your name
 * @Date: 2021-03-25 12:57:39
 * @LastEditTime: 2021-03-25 13:03:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \bi\src\store\actions\index.js
 */
import pageActions from '../pluggableUnit/editor/actions/pageAct'
import elementActions from '../pluggableUnit/editor/actions/elementAct'
import projectActions from '../pluggableUnit/editor/actions/projectAct'

/**
 * Vuex Store Actions
 *
 * @constant
 * @type {object}
 * @see {@link https://vuex.vuejs.org/en/actions.html|Vuex Actions}
 */
const actions = {
  ...projectActions,
  ...pageActions,
  ...elementActions
}

export default actions
