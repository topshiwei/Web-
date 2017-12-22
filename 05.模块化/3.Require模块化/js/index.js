
require(['./libs/toColor.js'],function(a){
    var box1 = document.querySelector("#box1");
    a.toColor(box1, 'green');
});

// [重点] 
// 	1:遵守AMD规范的有主模块,需要进行路径配置,否则不能使用require加载
// 	2:遵循AMD规范的"无主"模块,可以require(路径)直接使用路径进行去加载,
// 	还可以对无主模块进行paths配置,并且自定义paths的key(模块名字)
// 	3:不遵循AMD规范的模块,如何加载???

// [config]注意事项:
// 	1:在config里面paths对象值是路径,
// 	2:该paths路径不能直接使用./
// 	3:paths路径要严格按照目录路径查找(例如:../../js/)
// 	4:该路径不能包含.js后缀名
// 	5:paths对象key对于有主模块来说是不能修改有主模块的名字

require.config({
	paths{
		'lishijie':'../libs/toColor',
		'jquery':'../libs/jquery',
		'jisuan':'../common/util'
	},

	shim{//用来配置不符合AMD规范的模块
		'jisuan':{
			deps:[],//配置依赖文件
			exports:'math'
		}
		'jisuan':{
			exports:'jia'
		}
	}
});

// 加载paths配置路径之后的模块时,直接使用模块的名字即可
require(['lishijie','jquery','jisuan'],function(a,$,math){
	console.log(math);
});