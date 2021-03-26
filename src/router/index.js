/*
 * @Author: your name
 * @Date: 2021-03-21 21:44:52
 * @LastEditTime: 2021-03-25 15:11:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuegg-master\client\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Editor from '@/views/Editor/Editor'
import NotFound from '@/views/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'editor',
      component: Editor
    },{
      path: '*',
      component: NotFound
    }
  ]
})
