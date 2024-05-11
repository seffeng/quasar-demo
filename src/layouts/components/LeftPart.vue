<template>
  <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered class="bg-grey-2">
    <!-- drawer content -->
    <q-nav-menu
      :show-search="true"
      :search-callback="searchCallback"
      :bordered="false"
      :dense="false"
      :inputOutlined="false"
      :routes="routes"
    />
  </q-drawer>
</template>

<script>
import emitt from 'src/utils/emitt'
import { defineComponent, ref } from 'vue'
import QNavMenu from 'q-navmenu-item'

const leftDrawerOpen = ref(false)
export default defineComponent({
  name: 'LeftPart',
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
    emitt.on('showSidebarLeft', (visiable) => {
      leftDrawerOpen.value = visiable
      emitt.emit('sendSidebarLeft', leftDrawerOpen.value)
    })
  },
  unmounted () {
    emitt.off('showSidebarLeft', () => {})
  },
  setup () {
    return {
      leftDrawerOpen,
      searchCallback (search) {
        return console.log(search)
      }
    }
  }
})
</script>
