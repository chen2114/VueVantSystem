import Vue from 'vue'
import Storage from 'vue-ls'

const options = {
  // sessionStorage在浏览器关闭时会删除
  sessionStorageOptions: {
    namespace: 'chen__', // key键前缀
    name: 'ls', // 命名Vue变量.[ls]或this.[$ls]
    storage: 'session' // 存储名称: session, local, memory
  },
  // localStorage存储的数据是永久性
  localStorageOptions: {
    namespace: 'chen__',
    name: 'LS',
    storage: 'local'
  }
}

// 使用方法
// Vue.ls.set('foo', 'boo')
// Vue.ls.set('foo', 'boo', 60 * 60 * 1000) //有效1小时
// Vue.ls.get('foo') // 返回值：'boo'
// Vue.ls.get('boo', 10) // 如果没有设置boo返回默认值10

// let callback = (val, oldVal, uri) => {
//   console.log('localStorage change', val)
// }

// Vue.ls.on('foo', callback) //侦查改变foo键并触发回调
// Vue.ls.off('foo', callback) //不侦查

// Vue.ls.remove('foo') // 移除

Vue.use(Storage, options.sessionStorageOptions)
