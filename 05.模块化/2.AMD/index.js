// 问题:
// 1:require第一个参数必须是数组,不管加载几个模块,数组里面存放的是该模块的路径,只是可以省略.js的后缀名
// 依赖注入
require(['math.js','game.js'],function(math,game){
    var redDiv = document.querySelector('#redDiv');
    redDiv.onclick = function(){
        this.style.background = 'yellow';
    }
});

// 自学问题
// 1:如何使用不支持AMD规范的库文件? shim
// 2:配置远程服务器(CDN)的库文件


