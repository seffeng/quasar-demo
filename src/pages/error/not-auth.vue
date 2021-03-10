<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        403
      </div>

      <div class="text-h2" style="opacity:.4">
        {{ message }}
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        :label="$t('goHome')"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotAuth',
  data() {
    return {
      message: this.$t('error.notAuth')
    }
  }
}
</script>
