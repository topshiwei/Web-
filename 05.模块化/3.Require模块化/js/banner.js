require.config({
    baseUrl:'./libs',
    paths:{
        // 'swiper':'../libs/swiper'//js版本
        'swiper':'swiper.jquery',
        'jquery':'jquery',
        'util':'../common/util'
    }
});

require(['swiper','jquery'],function(swiper,$){
    // console.log(swiper);
    $(document).ready(function(){
        var mySwiper = new Swiper ('.swiper-container', {
            // direction: 'vertical',
            loop: true,
            autoplay: 2000,//可选选项，自动滑动

            // 如果需要分页器
            pagination: '.swiper-pagination',

            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',

            // 如果需要滚动条
            // scrollbar: '.swiper-scrollbar',
        });
    });

});

// 注意事项
// 1:该插件是否支持AMD规范
// 2:是否为主模块(模块的名字)