<template>
  <div>
    <div class="text-h4">{{ msg }}</div>
    <div>
      <div v-for="(item, index) in icons" :key="index">
        <div class="q-gutter-xs">
          <div class="text-h5 q-mb-sm">{{ item.category }}</div>
          <q-btn
            v-for="(icon, k) in item.icons"
            :key="k"
            stack
            flat
            padding="sm"
            :label="icon"
            :icon="icon"
            :ripple="false"
            class="btn-fixed-width ellipsis text-lowercase"
            @click="doCopy(icon)"
          />
        </div>
        <q-separator inset />
      </div>
    </div>
  </div>
</template>

<script>
import { copyToClipboard } from 'quasar'

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Material Icons'
    }
  },
  data() {
    return {
      icons: [
        {
          category: 'Action',
          icons: [
            '3d_rotation', 'accessibility', 'accessibility_new', 'accessible', 'accessible_forward', 'account_balance', 'account_balance_wallet', 'account_box', 'account_circle', 'add_shopping_cart',
            'add_task', 'add_to_drive', 'addchart', 'admin_panel_settings', 'alarm', 'alarm_add', 'alarm_off', 'alarm_on', 'all_inbox', 'all_out',
            'analytics', 'anchor', 'android', 'announcement', 'api', 'app_blocking', 'arrow_circle_down', 'arrow_circle_up', 'arrow_right_alt', 'article',
            'aspect_ratio', 'assessment', 'assignment', 'assignment_ind', 'assignment_late', 'assignment_return', 'assignment_returned', 'assignment_turned_in', 'autorenew', 'backup',
            'backup_table', 'batch_prediction', 'book', 'book_online', 'bookmark', 'bookmark_border', 'bookmarks', 'bug_report', 'build', 'build_circle',
            'cached', 'calendar_today', 'calendar_view_day', 'camera_enhance', 'cancel_schedule_send', 'card_giftcard', 'card_membership', 'card_travel', 'change_history', 'check_circle'
          ]
        },
        {
          category: 'Alert',
          icons: [
            'add_alert', 'auto_delete', 'error', 'error_outline', 'notification_important', 'warning'
          ]
        }
      ]
    }
  },
  methods: {
    doCopy(icon) {
      copyToClipboard(icon).then(() => {
        this.$q.notify({
          color: 'secondary',
          message: '复制成功：' + icon
        })
      }).catch(() => {
        this.$q.notify({
          color: 'negative',
          message: '复制失败！'
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-fixed-width {
  width: 130px
}
</style>
