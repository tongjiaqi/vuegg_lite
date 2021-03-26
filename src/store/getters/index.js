import pageGetters from '../pluggableUnit/editor/getters/pageGet'
import elementGetters from '../pluggableUnit/editor/getters/elementGet'
import componentGetters from '../pluggableUnit/editor/getters/componentGet'

/**
 * Vuex Store Getters
 *
 * @constant
 * @type {object}
 * @see {@link https://vuex.vuejs.org/en/getters.html|Vuex Getters}
 */
const getters = {
  ...pageGetters,
  ...elementGetters,
  ...componentGetters
}

export default getters
