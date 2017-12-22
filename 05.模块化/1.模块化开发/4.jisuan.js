// 开闭原则

// A
(function(a){
    a.quyu = function(){
        console.log('取余');
    }
    window.math = a;

})(window.math || {});



// B
(function(a){
    a.jia = function(){
        console.log('加法');
    }
    window.math = a;
})(window.math || {});






