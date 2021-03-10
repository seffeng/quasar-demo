<template>
  <div class="q-pa-sm row justify-center bg-blue-grey-8 window-height">
    <div style="width: 100%; max-width: 400px;">
      <div class="mt-percent-30 text-h5 q-mb-lg text-center">{{ title }}</div>
      <q-card class="bg-blue-grey-1">
        <q-card-section>
          <q-form
            ref="loginForm"
            class="q-gutter-md"
          >
            <q-input
              v-model="loginForm.username"
              lazy-rules
              outlined
              dense
              :rules="loginRules.username"
              :no-error-icon="true"
              placeholder="请输入账号"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>

            <q-input
              v-model="loginForm.password"
              outlined
              dense
              :type="showPassword()"
              lazy-rules
              :rules="loginRules.password"
              :no-error-icon="true"
              placeholder="请输入密码"
              @keypress.native.enter="login"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="loginOptions.isShow ? 'visibility' : 'visibility_off'"
                  class="cursor-pointer"
                  @click="loginOptions.isShow = !loginOptions.isShow"
                />
              </template>
            </q-input>
          </q-form>
          <q-btn color="primary" class="full-width q-mt-md" label="登录" :loading="loading" @click="login" />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      title: process.env.APP_TITLE,
      loading: false,
      loginForm: {
        username: '',
        password: ''
      },
      loginOptions: {
        isShow: false
      },
      loginRules: {
        username: [
          val => val && val.length > 0 || '请输入用户名！',
          val => val && val.length >= 5 || '用户名 5~16 位！',
          val => val && val.length <= 20 || '用户名 5~20 位！'
        ],
        password: [
          val => val && val.length > 0 || '请输入密码！',
          val => val && val.length >= 8 || '用户名 8~24 位！',
          val => val && val.length <= 24 || '用户名 8~24 位！'
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate().then(success => {
        if (success) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        }
      })
    },
    showPassword() {
      return this.loginOptions.isShow ? 'text' : 'password'
    }
  }
}
</script>

<style lang="scss" scoped>
.mt-percent-30 {
  margin-top: 30%;
}
</style>
