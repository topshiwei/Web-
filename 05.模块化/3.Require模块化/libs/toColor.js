

// 第一个参数是给该模块添加一个名字,我们称之为这种方式叫做有主模块,
// 例如Jquery里面define的时候也加了一个名字叫做jquery
define('lishijie',function(){
    function toColor(el,color){
        el.style.backgroundColor = color;
    }
    return {
        toColor:toColor;
    }
});

