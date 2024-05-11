<template>
  <q-layout view="hHh LpR lFf">
    <header-part :routes="routes()" />

    <left-part :routes="routes()" />

    <right-part />

    <q-page-container>
      <div class="q-ma-md">
        <breadcrumb-part />
        <router-view />
      </div>
    </q-page-container>

    <footer-part />

    <q-backtop icon="expand_less" glossy />

  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import { QBacktop } from 'q-backtop'
import routes from 'src/router/routes'
import HeaderPart from 'src/layouts/components/HeaderPart.vue'
import LeftPart from 'src/layouts/components/LeftPart.vue'
import RightPart from 'src/layouts/components/RightPart.vue'
import FooterPart from 'src/layouts/components/FooterPart.vue'
import BreadcrumbPart from 'src/components/BreadcrumbPart.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    QBacktop,
    BreadcrumbPart,
    HeaderPart,
    LeftPart,
    RightPart,
    FooterPart
  },

  setup () {
    return {
      routes () {
        return routes
      }
    }
  }
})
</script>
