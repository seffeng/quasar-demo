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
      titleTemplate: title => `${title} - ${process.env.APP_TITLE}`,
      // meta标记
      meta: {
        keywords: { name: 'keywords', content: process.env.APP_KEYWORD },
        description: { name: 'description', content: process.env.APP_DESCRIPTION }
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
