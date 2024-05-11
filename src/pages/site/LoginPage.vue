<template>
  <div class="q-pa-md column items-center bg-blue-grey-6 window-height">
    <div class="col-auto">
      <h5>登录</h5>
    </div>
    <div class="col">
      <q-card class="bg-blue-grey-1">
      <q-card-section>
        <q-form
          ref="refLoginFrom"
          class="q-gutter-md"
        >
          <q-input
            v-model="loginForm.username"
            lazy-rules
            outlined
            dense
            :rules="loginRules.username"
            :no-error-icon="true"
            @keyup.enter="login"
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
            @keyup.enter="login"
            placeholder="请输入密码"
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
          <q-toggle v-model="loginForm.accept">同意《服务条款》和《隐私协议》</q-toggle>
        </q-form>
        <q-btn color="primary" class="full-width q-mt-md" label="登录" :loading="loading" @click="login" />
      </q-card-section>
    </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useUserStore } from 'src/stores/user'
import { useRouter, useRoute } from 'vue-router'
import { isEmpty } from 'src/utils/validate'

export default defineComponent({
  name: 'LoginPage',
  setup () {
    const $q = useQuasar()
    const router = useRouter()
    const userStore = useUserStore()
    const route = useRoute()

    const loading = ref(false)
    const refLoginFrom = ref(null)

    const loginForm = ref({
      username: '',
      password: '',
      accept: false
    })

    const loginOptions = ref({
      isShow: false
    })

    const loginRules = ref({
      username: [
        val => (val && val.length > 0) || '请输入用户名！',
        val => (val && val.length >= 5) || '用户名 5~16 位！',
        val => (val && val.length <= 20) || '用户名 5~20 位！'
      ],
      password: [
        val => (val && val.length > 0) || '请输入密码！',
        val => (val && val.length >= 6) || '密码 6~24 位！',
        val => (val && val.length <= 24) || '密码 6~24 位！'
      ]
    })

    return {
      loading,
      loginForm,
      loginRules,
      loginOptions,
      refLoginFrom,
      showPassword () {
        return loginOptions.value.isShow ? 'text' : 'password'
      },
      login () {
        refLoginFrom.value.validate().then(success => {
          if (success) {
            if (loginForm.value.accept) {
              loading.value = true
              userStore.login(loginForm.value).then(() => {
                loading.value = false
                router.push({ path: isEmpty(route.query.redirect) ? '/' : route.query.redirect })
              }).catch(() => {
                loading.value = false
              })
            } else {
              $q.notify('请阅读并同意协议！')
            }
          }
        })
      }
    }
  }
})
</script>
