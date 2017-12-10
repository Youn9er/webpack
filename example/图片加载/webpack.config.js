module.exports = {
    //接口文件（唯一入口文件）
    entry: "./static/app.js",
    //发布位置：
    output:{
        filename: "demo/abc.js"
    },
    //图片加载器
    module: {
        loaders: [
            {
                //匹配规则
                test: /\.(jpg|png|gif|jpeg)$/,
                //加载器
                loader: "url-loader?limit=14336"
            }
        ]
    }
}