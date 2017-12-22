
// 引入css,我们需要使用loader来解析css文件,解析用的loader,分别是style-loader和css-loader
// style-loader:主要是用来处理css文件中使用到的url()
// css-loader:主要是将css插入到页面的style标签中
import './index.css';// 引入css时直接使用import加路径
import './test.scss';

let a = 100;
let b = 200;
console.log(a,b);
let box = document.getElementById('box');
box.innerHTML = 'hello webpack!';
