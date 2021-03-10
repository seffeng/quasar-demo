<template>
  <q-layout view="hHh lpR fFf">
    <Header />

    <SidebarLeft />

    <SidebarRight />

    <q-page-container>
      <div class="q-ma-md">
        <Breadcrumb />
        <router-view />
      </div>
    </q-page-container>

    <Footer />
    <q-backtop />

  </q-layout>
</template>

<script>
import { QBacktop } from 'q-backtop'
import Header from 'layouts/components/Header.vue'
import Footer from 'layouts/components/Footer.vue'
import SidebarLeft from 'layouts/components/SidebarLeft.vue'
import SidebarRight from 'layouts/components/SidebarRight.vue'
import Breadcrumb from 'components/Breadcrumb.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
    QBacktop,
    SidebarLeft,
    SidebarRight,
    Breadcrumb
  }
}
</script>

<style lang="scss" scoped>

</style>
