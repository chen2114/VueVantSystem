import axios from 'axios'
import Vue from 'vue'
import { Notify } from 'vant'
import { SET_TOKEN } from '@/libraries/store/mutation-types'

// 创建 axios 实例
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // json: 'application/json; charset=utf-8'
  // form: 'application/x-www-form-urlencoded; charset=utf-8'
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  responseType: 'json', // 返回数据类型
  timeout: 7000, // 超时时间
  maxContentLength: 2000, // 最大发包长度
  retry: 3, // 重试次数
  retryDelay: 3000, // 重试延时，3秒重试一次
  shouldRetry: () => true // 重试条件，默认只要是错误都需要重试
})

// request 拦截器
instance.interceptors.request.use(
  config => {
    // 每次请求在 headers 上添加参数
    const token = Vue.ls.get(SET_TOKEN)

    if (token) {
      config.headers.token = token
    }
    return config
  },
  error => {
    // 处理请求错误
    console.log(error) // 打印错误信息
    return Promise.reject(error)
  }
)

// response 拦截器
instance.interceptors.response.use(
  response => {
    const res = response.data
    // 如果自定义代码不是20000，则判断为错误。
    if (res.code !== 20000) {
      Notify({
        type: 'danger',
        message: res.message || 'Error'
      })
      return Promise.reject(new Error(res.message || 'Error')) // new Error() 将在请求catch中获取到
    } else {
      return res
    }
  },
  error => {
    console.log('err:' + error) // 打印错误信息
    Notify({
      type: 'danger',
      message: '请稍后刷新重试'
    })
    return Promise.reject(error)
  }
)

export const httpGet = (url, payload) => {
  return instance.get(url, { params: payload })
}

export const httpPost = (url, payload) => {
  return instance.poat(url, payload)
}
