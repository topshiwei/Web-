// (function(){
//     function jia(a,b){
//         return a + b;
//     }

//     function jian(a,b){
//         return a - b;
//     }

//     function cheng(a,b){
//         return a * b;
//     }

//     function chu(a,b){
//         return a / b;
//     }

//     return{
//         name:'lishijie',
//         age:'18'
//     }
// })();

// 加,减,乘,除,取余
// A->加,减,乘,除
// B->取余


// A
var math = (function(){
    // 私有变量
    function transNumber(str){
        return Number(str);
    }
    return {
        jia:function(a,b){
            return transNumber(a) + transNumber(b);
        },
        jian:function(a,b){
            return transNumber(a) - transNumber(b);
        },
        cheng:function(a,b){
            return transNumber(a) * transNumber(b);
        },
        chu:function(a,b){
            return transNumber(a) / transNumber(b);
        }
    };
})();



// B
math.quyu = function(){
    console.log('ssssssssssssss');
}




















