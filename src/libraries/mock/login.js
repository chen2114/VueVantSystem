import mockServer from './utils/utils'

mockServer('/logout', 'get', () => {
  return {
    data: [],
    message: '退出成功'
  }
})

mockServer('/login', 'get', payload => {
  const token = {
    admin: 'admin-token',
    editor: 'editor-token'
  }

  let result = {}

  if (payload.account === 'admin') {
    result = {
      data: {
        token: token.admin
      }
    }
  } else if (payload.account === 'editor') {
    result = {
      data: {
        token: token.editor
      }
    }
  } else {
    result = {
      data: [],
      message: '账号密码错误',
      code: 40000
    }
  }

  return result
})

mockServer('/user/getUserInfo', 'get', payload => {
  const token = {
    admin: 'admin-token',
    editor: 'editor-token'
  }

  let result = {}

  if (payload.token === token.admin) {
    result = {
      data: {
        role: 'admin'
      }
    }
  } else if (payload.token === token.editor) {
    result = {
      data: {
        role: 'editor'
      }
    }
  } else {
    result = {
      data: {},
      message: '当前用户不存在',
      code: 40000
    }
  }

  return result
})
