<template>
  <q-drawer v-model="rightDrawerOpen" side="right" bordered>
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
            <q-item-label> {{ userStore.username || 'Hi' }} </q-item-label>
            <q-item-label caption> {{ userStore.userId || 'xxxx' }}</q-item-label>
          </q-item-section>
        </q-item>
        <img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <q-separator dark />

        <q-card-actions align="right">
          <q-btn flat>Info</q-btn>
          <q-btn flat @click="logout">登出</q-btn>
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
import { defineComponent, ref } from 'vue'
import emitt from 'src/utils/emitt'
import { useUserStore } from 'src/stores/user'

const rightDrawerOpen = ref(false)
export default defineComponent({
  name: 'LeftPart',
  components: {
  },
  mounted () {
    emitt.on('showSidebarRight', (visiable) => {
      rightDrawerOpen.value = visiable
      emitt.emit('sendSidebarRight', rightDrawerOpen.value)
    })
  },
  unmounted () {
    emitt.off('showSidebarRight', () => {})
  },
  setup () {
    const userStore = useUserStore()
    return {
      userStore,
      rightDrawerOpen,
      logout () {
        userStore.logout()
      }
    }
  }
})
</script>
