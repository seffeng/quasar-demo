<template>
  <div class="q-mb-lg text-subtitle1">
    <q-breadcrumbs align="left">
      <q-breadcrumbs-el v-for="(item, index) in breadcrumbItems" :key="index" :label="item.meta.title" />
    </q-breadcrumbs>
    <q-separator />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'BreadcrumbPart',
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  setup () {
    const breadcrumbItems = ref([])
    return {
      breadcrumbItems,
      getBreadcrumb () {
        let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
        const first = matched[0]

        if (this.isHome(first)) {
          matched = []
        } else {
          matched = [].concat(matched)
        }
        this.breadcrumbItems = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
      },
      isHome (route) {
        const name = route && route.name
        if (!name) {
          return false
        }
        return name.trim().toLocaleLowerCase() === 'HomeIndex'.toLocaleLowerCase() || name.trim().toLocaleLowerCase() === 'SiteIndex'.toLocaleLowerCase()
      }
    }
  }
})
</script>
