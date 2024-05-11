<template>
  <q-footer elevated class="bg-grey-8 text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

      <q-toolbar-title>
        <div>Quasar {{ $q.version }}</div>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<script>
import emitt from 'src/utils/emitt'
import { defineComponent, ref } from 'vue'

const sidebar = ref({
  leftVisiable: true
})
export default defineComponent({
  mounted () {
    emitt.on('sendSidebarLeft', (visiable) => {
      sidebar.value.leftVisiable = visiable
    })
  },
  unmounted () {
    emitt.off('sendSidebarLeft', () => {})
  },
  setup () {
    return {
      sidebar,
      toggleLeftDrawer () {
        sidebar.value.leftVisiable = !sidebar.value.leftVisiable
        emitt.emit('showSidebarLeft', sidebar.value.leftVisiable)
      }
    }
  }
})
</script>
