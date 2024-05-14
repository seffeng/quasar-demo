<template>
  <q-banner class="bg-grey-3">
    <div class="q-pa-md">
      <div class="q-gutter-sm text-h4">
          {{ nowTime }}
      </div>

      <div class="q-gutter-md row items-start">
        <q-date v-model="today" :mask="settings.dateFormat.ymdahis" today-btn color="primary" />
        <q-time v-model="nowTime" with-seconds :mask="settings.dateFormat.ymdahis" color="primary" />
      </div>
    </div>
  </q-banner>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { date } from 'quasar'
import { settings } from 'src/utils/settings'

export default defineComponent({
  name: 'IndexPage',
  components: {
  },
  setup () {
    const timeStamp = ref(Date.now())
    const today = date.formatDate(timeStamp.value, settings.dateFormat.ymdahis)
    const nowTime = ref(today)
    let intervalId = null

    const incrementSeconds = () => {
      timeStamp.value = date.addToDate(timeStamp.value, { second: 1 })
      nowTime.value = date.formatDate(timeStamp.value, settings.dateFormat.ymdahis)
    }

    onMounted(() => {
      intervalId = setInterval(incrementSeconds, 1000)
    })

    onUnmounted(() => {
      clearInterval(intervalId)
    })

    return {
      settings,
      today,
      nowTime
    }
  }
})
</script>
