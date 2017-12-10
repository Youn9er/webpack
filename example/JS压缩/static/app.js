//创建两张图片(两种图片创建方式)
var img1 = new Image();
var img2 = document.createElement("img");

//将图片添加到页面中
document.body.appendChild(img1);
document.body.appendChild(img2);

//加载demo.js并执行
var demo = require("./demo.js");
demo();