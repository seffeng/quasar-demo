<template>
  <q-drawer
    v-model="visiable"
    side="right"
    bordered
    :width="260"
    @show="handleShow"
    @hide="handleHide"
  >
    <!-- drawer content -->
    <div class="q-pa-md">
      <q-card>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ userStateName }}</q-item-label>
            <q-item-label caption>Subhead</q-item-label>
          </q-item-section>
        </q-item>
        <img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <q-separator dark />

        <q-card-actions align="right">
          <q-btn flat @click.native="getInfo">fetch</q-btn>
          <q-btn flat @click.native="logout">登出</q-btn>
        </q-card-actions>
      </q-card>
      <div class="q-pt-md">
        <p>右侧内容</p>
        <p>右侧内容</p>
        <p>右侧内容</p>
        <p>右侧内容</p>
        <p>右侧内容</p>
      </div>
    </div>
  </q-drawer>
</template>

<script>
import bus from 'src/utils/bus'
export default {
  name: 'SidebarRight',
  data() {
    return {
      visiable: false
    }
  },
  computed: {
    userStateName: {
      get() {
        return this.$store.getters['user/name']
      }
    }
  },
  created() {
    bus.$on('showSidebarRight', val => {
      this.visiable = val
    })
  },
  mounted() {
  },
  methods: {
    handleHide() {
      bus.$emit('sendRightVisiable', this.visiable)
    },
    handleShow() {
      bus.$emit('sendRightVisiable', this.visiable)
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    async getInfo() {
      await this.$store.dispatch('user/getInfo')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
