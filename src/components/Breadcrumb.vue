<template>
  <div class="q-mb-lg text-subtitle1">
    <q-breadcrumbs align="left">
      <q-breadcrumbs-el v-for="(item, index) in breadcrumbItems" :key="index" :label="item.meta.title" />
    </q-breadcrumbs>
    <q-separator />
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      breadcrumbItems: []
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]

      if (this.isHome(first)) {
        matched = [{ path: '/', meta: { title: '首页' }}]
      } else {
        matched = [{ path: '/', meta: { title: '首页' }}].concat(matched)
      }
      this.breadcrumbItems = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },
    isHome(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'HomeIndex'.toLocaleLowerCase() || name.trim().toLocaleLowerCase() === 'SiteIndex'.toLocaleLowerCase()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
