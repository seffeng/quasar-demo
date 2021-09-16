<template>
  <q-header elevated>
    <q-toolbar class="glossy">
      <q-btn flat round dense icon="menu" class="q-mr-sm" @click="showSidebarLeft" />
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
      </q-avatar>

      <q-toolbar-title>Quasar {{ $q.version }}</q-toolbar-title>
      <q-navmenu-item
        input-bg-color="white"
        :show-search="true"
        :menu-icon="false"
        :search-callback="search"
        :routes="routes()"
      />
      <q-space />

      <q-btn flat round dense icon="menu" @click="showSidebarRight" />
    </q-toolbar>
  </q-header>
</template>

<script>
import bus from 'src/utils/bus'
import { debug } from 'src/utils'
import QNavmenuItem from 'q-navmenu-item'
import routes from 'src/router/routes'

export default {
  name: 'Header',
  components: {
    QNavmenuItem
  },
  data() {
    return {
      sidebar: {
        leftVisiable: true,
        rightVisiable: false
      }
    }
  },
  created() {
    bus.$on('sendLeftVisiable', val => {
      this.sidebar.leftVisiable = val
    })
    bus.$on('sendRightVisiable', val => {
      this.sidebar.rightVisiable = val
    })
  },
  methods: {
    search(str) {
      debug(str)
    },
    showSidebarLeft() {
      this.sidebar.leftVisiable = !this.sidebar.leftVisiable
      bus.$emit('showSidebarLeft', this.sidebar.leftVisiable)
    },
    showSidebarRight() {
      this.sidebar.rightVisiable = !this.sidebar.rightVisiable
      bus.$emit('showSidebarRight', this.sidebar.rightVisiable)
    },
    routes() {
      return routes
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
