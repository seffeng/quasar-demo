<template>
  <router-view />
</template>

<script>
import { useMeta } from 'quasar'
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'App',

  setup () {
    const route = useRoute()
    useMeta(() => {
      return {
        title: route.meta.title || process.env.VUE_APP_WEB_TITLE,
        titleTemplate: title => `${title} - ${process.env.VUE_APP_WEB_NAME}`,

        meta: {
          description: { name: 'description', content: process.env.VUE_APP_WEB_DESCRIPTION },
          keywords: { name: 'keywords', content: process.env.VUE_APP_WEB_KEYWORDS }
        }
      }
    })
  }
})
</script>
