// AMD
define(function(){
    function jia(){
        console.log('加');
    }
    function jian(){
        console.log('减法');
    }
    return {
        jia:jia,
        jian:jian
    }
});

// (function(obj){
//     function transNl(){
//         console.log('module');
//     }
//     obj.transNl = transNl;
//     window.tool = obj;
// })(window.tool || {});






