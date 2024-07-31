<template>
  <div class="row">
    <div class="col">
      <q-table
        v-model:pagination="pageOption.pagination"
        :rows="tableData"
        :columns="tableColumns"
        :loading="listLoading"
        row-key="id"
        no-data-label="暂无数据"
        binary-state-sort
        @request="onRequest"
      >
        <template v-slot:loading>
          <q-inner-loading showing color="primary" />
        </template>

        <template v-slot:top>
          <div class="q-gutter-md row items-start">
            <q-input
              v-model="formData.username"
              outlined
              dense
              placeholder="用户账号"
              class="width-200"
              clearable
              @keypress.enter="onSearch()"
            />
            <q-select
              v-model="formOption.statusItems"
              outlined
              dense
              :options="statusItems"
              :display-value="`${formOption.statusItems ? formOption.statusItems.label : '选择状态'}`"
              class="width-200"
              clearable
            />
            <q-input v-model="formData.createdAt" class="width-250" outlined dense mask="####/##/## - ####/##/##" placeholder="创建时间" clearable>
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer" />
              </template>
              <q-popup-proxy @show="formOption.isCloseCreateData = false">
                <q-date v-model="formOption.createDateItems" v-close-popup="formOption.isCloseCreateData" range minimal @range-end="selectCreateDate" />
              </q-popup-proxy>
            </q-input>
            <q-btn color="white" text-color="black" label="查询" @click="onSearch()" />
            <q-btn color="primary" label="添加账号" @click="handleCreate" />
          </div>
          <q-separator class="q-mt-sm" />
        </template>

        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            <q-badge outline :color="props.row.status.isNormal ? 'secondary' : 'warning' ">
              {{ props.row.status.name }}
            </q-badge>
          </q-td>
        </template>

        <template v-slot:body-cell-operation="props">
          <q-td :props="props" class="q-gutter-sm">
            <q-btn v-if="props.row.status.isNormal" color="warning" size="xs" label="锁定" title="锁定" @click="handleOff(props.row)" />
            <q-btn v-if="!props.row.status.isNormal" color="secondary" size="xs" label="解锁" title="解锁" @click="handleOn(props.row)" />
            <q-icon class="cursor-pointer" size="xs" color="secondary" name="edit" title="编辑" @click="handleUpdate(props.row)" />
            <q-icon class="cursor-pointer" size="xs" color="red" name="delete_forever" title="删除" @click="handleDelete(props.row)" />
          </q-td>
        </template>

        <template v-slot:no-data="{ icon, message }">
          <div class="full-width row flex-center q-gutter-sm">
            <q-icon size="2em" :name="icon" />
            <span>
              {{ message }}
            </span>
          </div>
        </template>

        <template v-slot:bottom>
          <pagination-part
            :page="pageOption.pagination.page"
            :page-count="pageOption.pageCount"
            :page-size="pageOption.pagination.rowsPerPage"
            :total-count="pageOption.totalCount"
            :page-change="pageChange"
            :select-callback="pageSizeChange"
          />
        </template>
      </q-table>
    </div>

    <q-dialog v-model="dialogOption.visible" persistent>
      <q-card style="width: 400px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">{{ dialogOption.title }}</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <q-form
            ref="refSubmitForm"
            class="q-px-sm q-gutter-md column"
          >
            <q-input
              v-model="dialogData.username"
              outlined
              dense
              label="账号"
              :no-error-icon="true"
              lazy-rules
              :rules="dialogOption.formRules.username"
            />
            <q-input
              v-model="dialogData.password"
              :type="dialogOption.showPassword ? 'text' : 'password'"
              outlined
              dense
              label="登录密码"
              :no-error-icon="true"
              lazy-rules
              :rules="dialogData.id > 0 ? dialogOption.formRules.password.update : dialogOption.formRules.password.create"
            >
              <template v-slot:append>
                <q-icon
                  :name="dialogOption.showPassword ? 'visibility' : 'visibility_off'"
                  class="cursor-pointer"
                  @click="dialogOption.showPassword = !dialogOption.showPassword"
                />
              </template>
              <template v-slot:after>
                <q-icon name="content_copy" class="cursor-pointer" size="lg" @click="doCopyPassword">
                  <q-tooltip>
                    生成并复制
                  </q-tooltip>
                </q-icon>
              </template>
            </q-input>
          </q-form>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn outline label="取消" color="primary" v-close-popup />
          <q-btn label="确定" color="primary" :loading="dialogOption.btnLoading" @click="onSubmit" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style scoped>
.width-200 {
  width: 200px;
}
.width-250 {
  width: 250px;
}
</style>

<script>
import { defineComponent, ref } from 'vue'
import { date, useQuasar, copyToClipboard } from 'quasar'
import { settings } from 'src/utils/settings'
import { isEmpty } from 'src/utils/validate'
import { randomStringNumber } from 'src/utils'
import PaginationPart from 'src/components/PaginationPart.vue'

export default defineComponent({
  components: {
    PaginationPart
  },
  created () {
    this.fetchDownList()
    this.fetchData()
  },
  setup () {
    const $q = useQuasar()
    const tableData = ref([])
    const listLoading = ref(false)
    const refSubmitForm = ref(null)

    const tableColumns = ref([
      { name: 'id', field: 'id', label: 'ID', align: 'center', sortable: true },
      { name: 'username', field: 'username', label: '账号', align: 'center' },
      { name: 'status', field: 'status', label: '状态', align: 'center' },
      { name: 'createdAt', field: 'createdAt', label: '添加时间', align: 'center', sortable: true },
      { name: 'operation', label: '操作', align: 'center' }
    ])

    const pageOption = ref({
      pagination: {
        sortBy: '',
        descending: false,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 10
      },
      pageCount: 0,
      totalCount: 0
    })

    const dialogOption = ref({
      visible: false,
      title: '',
      showPassword: false,
      btnLoading: false,
      formRules: {
        username: [
          val => (val && val.length > 0) || '请输入账号！',
          val => (val && val.length >= 5) || '账号 5~16 位！',
          val => (val && val.length <= 20) || '账号 5~20 位！'
        ],
        password: {
          create: [
            val => (val && val.length > 0) || '请输入密码！',
            val => (val && val.length >= 6) || '账号 6~24 位！',
            val => (val && val.length <= 24) || '账号 6~24 位！'
          ],
          update: [
            val => (val === '' || (val && val.length > 0)) || '请输入密码！',
            val => (val === '' || (val && val.length >= 6)) || '密码 6~24 位！',
            val => (val === '' || (val && val.length <= 24)) || '密码 6~24 位！'
          ]
        }
      }
    })

    const dialogData = ref({
      id: 0,
      username: '',
      password: ''
    })

    const formData = ref({
      id: '',
      username: '',
      statusId: '',
      createdAt: '',
      orderBy: ''
    })

    const formOption = ref({
      statusItems: null,
      createDateItems: '',
      isCloseCreateData: false
    })

    const statusItems = ref([])

    const fetchData = () => {
      onSearch(1)
    }

    const fetchDownList = () => {
      statusItems.value.push({
        label: '正常',
        value: 1
      })
      statusItems.value.push({
        label: '锁定',
        value: 2
      })
    }

    const onSearch = (page = 1) => {
      listLoading.value = true
      const searchParams = {}
      searchParams.page = isEmpty(page) ? 1 : page
      searchParams.perPage = pageOption.value.pagination.rowsPerPage
      if (!isEmpty(formData.value.username)) {
        searchParams.username = formData.value.username
      }

      if (!isEmpty(formOption.value.statusItems)) {
        searchParams.statusId = formOption.value.statusItems.value
      }
      if (!isEmpty(formData.value.createdAt)) {
        const createDate = formData.value.createdAt.split(' - ')
        searchParams.startAt = createDate[0]
        searchParams.endAt = createDate[1]
      }
      if (!isEmpty(formData.value.orderBy)) {
        searchParams.orderBy = formData.value.orderBy
      }

      listLoading.value = false
      const item = [
        {
          id: 1,
          username: '10001',
          status: {
            id: 1,
            name: '正常',
            isNormal: true
          },
          createdAt: Date.now()
        },
        {
          id: 2,
          username: '10002',
          status: {
            id: 2,
            name: '锁定',
            isNormal: false
          },
          createdAt: Date.now()
        }
      ]
      tableData.value = []
      pageOption.value.pagination.page = searchParams.page
      pageOption.value.totalCount = 11
      pageOption.value.rowsPerPage = 10
      pageOption.value.pageCount = 2

      if (item) {
        for (const i in item) {
          tableData.value.push({
            id: item[i].id,
            username: item[i].username,
            status: item[i].status,
            createdAt: date.formatDate(item[i].createdAt, settings.dateFormat.ymdhi)
          })
        }
      }
    }

    const pageChange = (page) => {
      if (page !== pageOption.value.pagination.page) {
        onSearch(page)
      }
    }

    const onRequest = (props) => {
      const { page, rowsPerPage, sortBy, descending } = props.pagination
      if (sortBy === '') {
        return
      }
      pageOption.value.pagination.page = page
      pageOption.value.pagination.rowsPerPage = rowsPerPage
      pageOption.value.pagination.sortBy = sortBy
      pageOption.value.pagination.descending = descending
      formData.value.orderBy = descending ? ('-' + sortBy) : sortBy
      onSearch(page)
    }

    const onSubmit = () => {
      refSubmitForm.value.validate().then(success => {
        if (success) {
          dialogOption.value.btnLoading = true
          if (dialogData.value.id > 0) {
            $q.notify({
              color: settings.color.success,
              message: '编辑操作'
            })
          } else {
            $q.notify({
              color: settings.color.success,
              message: '添加操作'
            })
          }
          dialogOption.value.btnLoading = false
        }
      })
    }

    return {
      settings,
      listLoading,
      pageOption,
      tableColumns,
      tableData,
      statusItems,
      formData,
      formOption,
      dialogOption,
      dialogData,
      onSearch,
      fetchDownList,
      fetchData,
      pageChange,
      onRequest,
      onSubmit,
      refSubmitForm,
      handleCreate () {
        dialogOption.value.visible = true
        dialogOption.value.title = '添加用户'
        dialogData.value.id = 0
        dialogData.value.username = ''
        dialogData.value.password = ''
      },
      handleUpdate (row) {
        dialogOption.value.visible = true
        dialogOption.value.title = '编辑用户'
        dialogData.value.id = row.id
        dialogData.value.username = row.username
        dialogData.value.password = ''
      },
      handleOn (row) {
        listLoading.value = true
        $q.notify({
          color: settings.color.success,
          message: '解锁操作'
        })
        listLoading.value = false
      },
      handleOff (row) {
        $q.dialog({
          message: '确定锁定该用户[' + row.username + ']?',
          title: '提示',
          ok: {
            label: '确定',
            color: 'primary'
          },
          cancel: {
            label: '取消',
            color: 'primary',
            outline: true
          }
        }).onOk(() => {
          listLoading.value = true
          $q.notify({
            color: settings.color.success,
            message: '锁定操作'
          })
          listLoading.value = false
        })
      },
      handleDelete (row) {
        $q.dialog({
          message: '确定删除该用户[' + row.username + ']?',
          title: '提示',
          ok: {
            label: '确定',
            color: 'primary'
          },
          cancel: {
            label: '取消',
            color: 'primary',
            outline: true
          }
        }).onOk(() => {
          listLoading.value = true
          $q.notify({
            color: settings.color.success,
            message: '删除操作'
          })
          listLoading.value = false
        })
      },
      selectCreateDate () {
        if (typeof formOption.value.createDateItems === 'string') {
          formData.value.createdAt = formOption.value.createDateItems + ' - ' + formOption.value.createDateItems
        } else {
          formData.value.createdAt = formOption.value.createDateItems.from + ' - ' + formOption.value.createDateItems.to
        }
        formOption.value.isCloseCreateData = true
      },
      doCopyPassword () {
        dialogData.value.password = randomStringNumber()
        copyToClipboard(dialogData.value.password).then(() => {
          $q.notify({
            color: 'info',
            message: '复制成功！'
          })
        }).catch(() => {
          $q.notify({
            color: 'warning',
            message: '复制失败！'
          })
        })
      },
      pageSizeChange (size) {
        pageOption.value.pagination.rowsPerPage = size
        onSearch(1)
      }
    }
  }
})
</script>
