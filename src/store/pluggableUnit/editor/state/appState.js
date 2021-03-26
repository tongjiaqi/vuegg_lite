/*
 * @Author: your name
 * @Date: 2021-03-25 16:03:36
 * @LastEditTime: 2021-03-25 16:32:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bi\src\store\pluggableUnit\editor\state\index.js
 */
import newState from "@/store/pluggableUnit/editor/factories/stateFactory";
const appState = {
  ...newState()
};

export default appState