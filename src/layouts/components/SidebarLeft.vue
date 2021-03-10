<template>
  <q-drawer
    v-model="visiable"
    side="left"
    bordered
    content-class="bg-grey-2"
    :width="260"
    @show="handleShow"
    @hide="handleHide"
  >
    <q-navmenu-item
      menu-type="item"
      :show-search="true"
      :input-dense="true"
      :input-outlined="false"
      :search-callback="search"
      :routes="routes()"
    />
  </q-drawer>
</template>

<script>
import bus from 'src/utils/bus'
import { debug } from 'src/utils'
import QNavmenuItem from 'q-navmenu-item'
import routes from 'src/router/routes'

export default {
  name: 'SidebarLeft',
  components: {
    QNavmenuItem
  },
  data() {
    return {
      visiable: true
    }
  },
  created() {
    bus.$on('showSidebarLeft', val => {
      this.visiable = val
    })
  },
  methods: {
    search(str) {
      debug(str)
    },
    handleHide() {
      bus.$emit('sendLeftVisiable', this.visiable)
    },
    handleShow() {
      bus.$emit('sendLeftVisiable', this.visiable)
    },
    routes() {
      return routes
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
