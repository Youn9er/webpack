var webpack = require('webpack');


// module.exports = {
//     entry: __dirname+'/static/app.js',
//     output: {
//         path: __dirname+'/young/js',
//         filename: 'demo.js'
//     },
//     module: {
//         loaders: [
//             {test: /\.css$/,loader: 'style-loader!css-loader'},
//             {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
//             {test: /\.svg/, loader: 'svg-url-loader'}
//         ]
//     }
// };
module.exports = {
    //插件项
    //plugins: [commonsPlugin],
    //页面入口文件配置
    entry: __dirname + '/static/app.js',
    //入口文件输出配置
    output: {
        path: __dirname + '/young/js',
        filename: "demo.js"
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'}
        ]
    }  
};



   
