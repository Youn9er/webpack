//在webpack的配置文件中，通常将配置暴露在接口中
module.exports = {
    //定义配置文件
    //定义入口文件
    entry: {
        dest: "./js/app.js",
        dest1: "./js/test.js"
    },
    //定义文件发布的位置
    output: {
        //定义发布目录
        path: __dirname + "/ygzt/js",
        filename:"[name].js"
    }
}