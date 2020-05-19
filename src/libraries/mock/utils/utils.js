import qs from 'qs'
import Mock from 'mockjs'

function getPayload (options) {
  return qs.parse(options.url.split('?')[1])
}

function formatPage (payload, result) {
  const [index, size, total] = [payload.currentPage, payload.pageSize, result.data.length]
  const len = total / size
  const totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len
  const newData = result.data.slice((index - 1) * size, index * size)
  result.data = newData
  return {
    currentPage: Number(index),
    pageSize: Number(size),
    total: Number(total),
    totalPages: Number(totalPages),
    ...result
  }
}

export default function mockServer (url, type, callback) {
  Mock.mock(
    RegExp(`${process.env.VUE_APP_BASE_API}${url}?.*`),
    type = type || 'get',
    options => {
      const payload = getPayload(options)
      if (payload.currentPage && payload.pageSize) {
        return {
          message: 'ok',
          code: 20000,
          ...formatPage(payload, callback(payload))
        }
      } else {
        return {
          message: 'ok',
          code: 20000,
          ...callback(payload)
        }
      }
    }
  )
}
