<template>
  <div class="text-blue text-center">
    <div>
      <div style="font-size: 30vh">
        401
      </div>

      <div class="text-h2" style="opacity:.4">
        无权限
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="返回首页"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotAuthPage'
})
</script>
