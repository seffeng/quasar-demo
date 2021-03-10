<template>
  <q-footer elevated class="bg-blue-8 text-white">
    <q-toolbar>
      <q-btn flat round dense icon="menu" class="q-mr-sm" @click="showSidebarLeft" />
      <q-toolbar-title>
        Footer
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<script>
import bus from 'src/utils/bus'
export default {
  name: 'Footer',
  data() {
    return {
      sidebar: {
        leftVisiable: true
      }
    }
  },
  created() {
    bus.$on('sendLeftVisiable', val => {
      this.sidebar.leftVisiable = val
    })
  },
  methods: {
    showSidebarLeft() {
      this.sidebar.leftVisiable = !this.sidebar.leftVisiable
      bus.$emit('showSidebarLeft', this.sidebar.leftVisiable)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
