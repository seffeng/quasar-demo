export const settings = {
  /**
   * 时间格式
   */
  dateFormat: {
    ymd: 'YYYY-MM-DD',
    ymdhi: 'YYYY-MM-DD HH:mm',
    ymdhis: 'YYYY-MM-DD HH:mm:ss',
    ymdahi: 'YYYY-MM-DD dddd HH:mm',
    ymdahis: 'YYYY-MM-DD dddd HH:mm:ss',
    year: 'YYYY',
    month: 'MM',
    day: 'DD',
    hour: 'HH',
    minute: 'mm',
    endhis: '23:59:59'
  },

  /**
   * 响应状态
   */
  response: {
    status: {
      success: 'success',
      error: 'error'
    }
  },

  color: {
    success: 'secondary',
    error: 'negative'
  },

  /**
   * 状态
   */
  status: {
    normal: {
      id: 1,
      name: '正常'
    },
    lock: {
      id: 2,
      name: '锁定'
    },
    on: {
      id: 3,
      name: '启用'
    },
    off: {
      id: 4,
      name: '停用'
    },
    success: {
      id: 5,
      name: '成功'
    },
    faild: {
      id: 6,
      name: '失败'
    }
  }
}
