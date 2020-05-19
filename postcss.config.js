module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 8'],
    },
    'postcss-pxtorem': {
      rootValue: 37.5, // 根据设计图尺寸写，设计图是375，就写37.5
      propList: ['*'], // 需要被转换的属性
      selectorBlackList: [] // 不进行px转换的选择器,使用PX不会转换为rem
    }
  }
}