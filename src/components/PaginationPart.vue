<template>
  <div class="row justify-center q-mt-md">
    <div v-if="showSummary" class="row no-wrap items-center">
      <div v-if="totalCount > 0">共 {{ totalCount }} 条，</div>
      <div v-if="pageSize > 0">每页显示：</div>
      <div v-if="pageSize > 0">
        <q-select
          v-model="perPage"
          dense
          options-dense
          :options="pageSizeOptions"
          @update:model-value="selectChange"
        />
      </div>
      <div v-if="pageSize > 0">条，</div>
      <div>{{ currentPage }}/{{ pageCount }} 页</div>
    </div>
    <q-pagination
      v-if="pageCount > 1"
      v-model="currentPage"
      :color="color"
      :max="pageCount"
      :max-pages="maxPages"
      :boundary-links="true"
      @update:model-value="pageChange"
    />
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'PaginationPart',
  props: {
    page: {
      type: Number,
      default: 1
    },
    pageCount: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 0
    },
    pageChange: {
      type: Function,
      default: function (page) {
        return page
      }
    },
    totalCount: {
      type: Number,
      default: 0
    },
    showSummary: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: 'primary'
    },
    maxPages: {
      type: Number,
      default: 6
    },
    selectCallback: {
      type: Function,
      default () {
        return 0
      }
    }
  },
  setup (props) {
    const currentPage = ref(props.page)
    const perPage = ref(props.pageSize)
    watch(() => props.page, (page) => {
      currentPage.value = page
    })
    const pageSizeOptions = ref([5, 10, 15, 20, 30, 50])
    return {
      pageSizeOptions,
      currentPage,
      perPage,
      selectChange (size) {
        if (typeof props.selectCallback === 'function') {
          perPage.value = size
          props.selectCallback(size)
        }
      }
    }
  }
})
</script>
