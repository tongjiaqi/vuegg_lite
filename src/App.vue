<!--
 * @Author: your name
 * @Date: 2021-03-21 21:44:52
 * @LastEditTime: 2021-03-25 14:45:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuegg-master\client\src\App.vue
-->
<template>
  <div id="app" class="mdc-theme--background">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import { loadVueggProject } from '@/store/types'

import '@/assets/icons/product/vuegg'

export default {
  name: 'app',
  mounted: function () {
    this.initializeState()
    this.loadVueggProject({origin: 'local'})
  },
  methods: {
    ...mapMutations(['initializeState']),
    ...mapActions([loadVueggProject])
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
</style>
