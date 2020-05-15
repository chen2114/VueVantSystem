const path = require('path')
const env = process.env.NODE_ENV

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  /**
  * 如果计划在子路径下部署站点，则需要设置publicPath，
  * 例如GitHub页面。如果您计划将站点部署到https://foo.github.io/bar/，
  * 那么publicPath应该设置为“/bar/”
  * 在大多数情况下，请使用“/”！！！
  */
  publicPath: './',
  outputDir: 'dist', // 生成文件的目录名称
  lintOnSave: process.env.NODE_ENV === 'development', // 是否关闭eslint
  productionSourceMap: !(env === 'production'),
  chainWebpack: config => {
    if (env === 'production') {
      config.entry.app = ['@babel/polyfill', 'src/main.js']
    }

    // svg rule loader
    const svgRule = config.module.rule('svg') // 找到 svg-loader
    svgRule.uses.clear() // 清除已有 loader
    svgRule // 添加新的 svg loader
      .test(/\.svg$/)
      .exclude.add(/node_modules/).end()
      .include.add(resolve('src/svg')).end() // 处理svg目录
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        resolve('src/style/index.less') // 导入公共样式
      ]
    }
  }
}