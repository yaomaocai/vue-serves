// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    'postcss-pxtorem': {
      minPixelValue: 2,
      rootValue: 40, //结果为：设计稿元素尺寸/40
      propList: ['*']
    }
  }
}
