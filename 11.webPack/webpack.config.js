// 引入Node里面的path模块,用来找到绝对路径
const path = require('path');

// 引入js压缩,uglifyjs
const uglify = require('uglifyjs-webpack-plugin');

// 引入html-webpack-plugin
const htmlPlugin = require('html-webpack-plugin');

// CommonJS
// 定义一个模块
module.exports = {
    // 入口文件的配置项
    entry:{
        entry:'./src/entry.js',
        entry2:'./src/entry2.js'
    },
    // 出口文件的配置项
    output:{
        // 打包过后输出的位置
        path:path.resolve(__dirname,'dist'),
        // 输出出来的文件名字
        // [name]的意思是根据入口文件的名称,打包成相同的名称,有几个入口文件,就可以打包出几个文件
        filename:'[name].js'
    },
    // 模块: 例如转换sass,less等解读css,js/图片压缩
    // loader打包机
    module:{
        rules:[{
            // 过滤需要loader的文件(一般写正则)
            test:/\.css$/,
            // use:['style-loader','css-loader']
            use:[{
                loader:'style-loader'
            },{
                loader:'css-loader'
            }]
        },{
            test:/\.(png|jpg|svg|gif|jpeg|)$/,
            use:[{
                loader:'url-loader',
            }]
        },{
            test:/\.scss$/,
            use:[{
                loader:'style-loader'
            },{
                loader:'css-loader'
            },{
                loader:'sass-loader'
            }]
        }]
    },
    // 插件:用于生产模板和各项功能
    plugins:[
        // new uglify()
        new htmlPlugin({
            // 是对html文件进行压缩,removeAttributeQuotes是去掉属性的双引号
            minify:{
                removeAttributeQuotes:true,
            },
            // 为了开发中有缓存效果,所以加入hash,这样可以有效避免缓存JS
            hash:true,
            // 是要打包的html模板路径和文件名称
            template:'./src/index.html'
        })
    ],
    // 配置webpack开发环境服务器功能
    devServer:{
        // 设置服务器打开的目录
        contentBase:path.resolve(__dirname,'dist'),
        // 服务器ip地址
        host:'127.0.0.1',
        // 端口号
        port:8088
    }
}
// 引入一个模块
// require('gulp');

// AMD
// 定义一个模块
// define([], function(require, factory) {});
// 引入模块

// ES6
// 定义模块
// export default();
// 引入模块
// import a from 'a.js'
// import from 'a.css'