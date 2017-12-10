//创建两张图片(两种图片创建方式)
var img1 = new Image();
var img2 = document.createElement("img");

//引入图片地址
var src1 = require("./img/advertising.jpg");
var src2 = require("./img/logo.png");

console.log(src1);
console.log(src2);

//加载图片，为img添加src属性
img1.src = src1;
img2.src = src2;

//将图片添加到页面中
document.body.appendChild(img1);
document.body.appendChild(img2);