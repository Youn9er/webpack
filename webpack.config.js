//在webpack的配置文件中，通常将配置暴露在接口中
module.exports = {
    //定义配置文件
    //定义入口文件
    entry:"./js/app.js",
    //定义文件发布的位置
    output:{
        filename:"demo/dest.js"
    }
}