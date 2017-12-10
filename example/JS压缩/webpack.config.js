// webpack中内置的js压缩插件，存放在webpack的optimize对象下
// 引入webpack模块
var webpack = require('webpack')
// 缓存插件名称，以便简化后面的配置
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry:'./static/app.js',
    // 发布文件
    output:{
        filename:'demo/abc.js'
    },
    // 我们要压缩所有的js文件，所以引入js压缩插件
    plugins:[
        // 每个成员代表一个插件
        new UglifyJsPlugin
    ]
}