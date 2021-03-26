<template>
  <div class="layout-container">
    <div class="edit-view">
      <headegg :scroll0="notScrolled"></headegg>
      <main id="main" role="main" @scroll="scrollFunction">
        <mainegg></mainegg>
      </main>
      <drawegg></drawegg>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { checkLastSaved, rebaseSelectedElements } from '@/store/types'

import Headegg from '@/views/Editor/components/header'
import Drawegg from '@/views/Editor/components/drawer'
import Mainegg from '@/views/Editor/components/main'
// import BlockLoader from '@/views/Editor/components/common/loader/BlockLoader'

import redoundo from '@/views/Editor/mixins/redoundo'

export default {
  name: 'editor',
  mixins: [redoundo],
  components: { Headegg, Drawegg, Mainegg },
  data: function () {
    return {
      notScrolled: true
    }
  },
  created: function () {
    this.$root.$on('rebaseState', this.rebaseState)
  },
  beforeDestroy: function () {
    this.$root.$off('rebaseState', this.rebaseState)
  },
  methods: {
    scrollFunction (e) {
      this.notScrolled = (e.target.scrollTop === 0)
    },

    rebaseState () {
      this.checkLastSaved()
      this.rebaseSelectedElements()
    },

    ...mapActions([rebaseSelectedElements, checkLastSaved])
  }
}
</script>

<style>
.layout-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.edit-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
}

#main {
  height: 100%;
  position: relative;
  display: inline-block;
  overflow-y: auto;
  overflow-x: auto;
  flex-grow: 1;
  margin-right: 240px;
}

/* IN DEVICES SMALLER THAN 1024px -> NO DRAWER (so remove margins) */
@media screen and (max-width: 1024px) {
  #main {
    margin: 0px;
  }
}

dialog {
  width: 320px !important;
  border: none !important;
  box-shadow:
    0 9px 46px 8px rgba(0,0,0,.14),
    0 11px 15px -7px rgba(0,0,0,.12),
    0 24px 38px 3px rgba(0,0,0,.2);
}

dialog, dialog::backdrop {
  animation-name: anim-open;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
}

@keyframes anim-open {
	0% { opacity: 0; transform: scale3d(1.1, 1.1, 1); }
	100% { opacity: 1; transform: scale3d(1, 1, 1); }
}
</style>


<style scoped>
.linear-loader {
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1001;
  height: 2px !important;
  position: absolute !important;
}
</style>
