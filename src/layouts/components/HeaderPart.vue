<template>
  <q-header elevated class="bg-primary text-white glossy">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
      </q-avatar>
      <q-toolbar-title :shrink="true">
        Quasar {{ $q.version }}
      </q-toolbar-title>

      <q-nav-menu
        :vertical="false"
        :routes="routes"
        :show-search="true"
        :dense="false"
        :search-callback="searchCallback"
      />

      <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
    </q-toolbar>
  </q-header>
</template>

<script>
import emitt from 'src/utils/emitt'
import { defineComponent, ref } from 'vue'
import QNavMenu from 'q-navmenu-item'

const sidebar = ref({
  leftVisiable: true,
  rightVisiable: false
})
export default defineComponent({
  name: 'HeaderPart',
  components: {
    QNavMenu
  },
  props: {
    routes: {
      routes: Array,
      required: true
    }
  },
  mounted () {
    emitt.on('sendSidebarLeft', (visiable) => {
      sidebar.value.leftVisiable = visiable
    })

    emitt.on('sendSidebarRight', (visiable) => {
      sidebar.value.rightVisiable = visiable
    })
  },
  unmounted () {
    emitt.off('sendSidebarLeft', () => {})
    emitt.off('sendSidebarRight', () => {})
  },
  setup () {
    return {
      sidebar,
      searchCallback (search) {
        return console.log(search)
      },
      toggleLeftDrawer () {
        sidebar.value.leftVisiable = !sidebar.value.leftVisiable
        emitt.emit('showSidebarLeft', sidebar.value.leftVisiable)
      },
      toggleRightDrawer () {
        sidebar.value.rightVisiable = !sidebar.value.rightVisiable
        emitt.emit('showSidebarRight', sidebar.value.rightVisiable)
      }
    }
  }
})
</script>
