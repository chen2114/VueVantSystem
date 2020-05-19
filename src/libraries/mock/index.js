const files = require.context('.', false, /\.js$/)
files.keys().forEach(key => {
  if (key !== './index.js') {
    files(key)
  }
})
