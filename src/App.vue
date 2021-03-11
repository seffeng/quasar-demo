<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  meta() {
    return {
      // 设置标题
      title: this.getTitle(),
      titleTemplate: title => `${title} - ${process.env.VUE_APP_WEB_TITLE}`,
      // meta标记
      meta: {
        keywords: { name: 'keywords', content: process.env.VUE_APP_WEB_KEYWORD },
        description: { name: 'description', content: process.env.VUE_APP_WEB_DESCRIPTION }
      }
    }
  },
  methods: {
    getTitle() {
      return (this.$route.meta && this.$route.meta.title) ? this.$route.meta.title : ''
    }
  }
}
</script>
