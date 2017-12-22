// 优点:复用性比较高
// 缺点:暴露的变量名比较多,造成变量名污染的概率更大
// 如何解决？
// 封装成对象的形式
// 优点:减少变量名污染的概率
// 缺点:

//私有方法(这种私有方法不仅内部能调用而且外部也能调用)
function transNumber(str){
    return parseInt(str);
}

var math = {

    jia:function (a,b){
        return transNumber(a) + transNumber(b);
    },
    jian:function (a,b){
        return transNumber(a) - transNumber(b);
    },
    cheng:function (a,b){
        return transNumber(a) * transNumber(b);
    },
    chu:function (a,b){
        return transNumber(a) / transNumber(b);
    }
}
