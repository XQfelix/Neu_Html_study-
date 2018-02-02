$("#carousel_1").FtCarousel();

/*页面顶部城市点击显示事件*/
$(function(){
    $('.click').click(function() {

        $('.nav_city').toggle();

    });


    /*老师信息介绍baner图添加点击事件*/

    $('.baner_right li').click(function(){

        var a = $(this).index();

        $('.main_ter_teachers').eq(a).addClass('job_show')
            .removeClass('job_hide').siblings('.job_show')
            .removeClass('job_show').addClass('job_hide');

        $('.baner_right li').eq(a).addClass('addbor').siblings('.addbor').removeClass('addbor');


    });


    /*设定定时器让baner图3秒动一次*/
    var i = 1;
    setInterval(function () {
        /*设定底部入职信息定时滚动*/
        $('.jiuye_main_bottom .jiuye_baner li').eq(i).addClass('bottom_show')
            .removeClass('bottom_hide').siblings('.bottom_show')
            .removeClass('bottom_show').addClass('bottom_hide');
        $('.main_ter_teachers').eq(i).addClass('job_show')
            .removeClass('job_hide').siblings('.job_show')
            .removeClass('job_show').addClass('job_hide');

        $('.baner_right li').eq(i).addClass('addbor').siblings('.addbor').removeClass('addbor');


        i++;
        if(i>5){
            i=0;
        }

    },3000);



    /*增加底部导航图片的效果移上移下效果mouseover事件和mouseout事件*/
    $(".main_bottom_img img").mouseover(function(){

        $(this).parent().children("p").addClass('bottom_color');

    });

    $(".main_bottom_img img").mouseout(function(){

        $(this).parent().children("p").removeClass('bottom_color');

    });


    /*增加聊天窗口最小化事件,当鼠标点击时增加CSS样式动画*/
    $(".chat_close").click(function(){
        $(".chat").css({
            "transform":"translateY(465px) translateX(230px)",
            "transition-duration":"1s"
        });

        $(".chat2").css({
            "-webkit-transition-delay":"1s",
            "transform":"translateX(-150px) translateY(-40px)",
            "transition-duration":"1s"
        });


    });
    /*增加聊天窗口最大化事件*/
    $(".chat2").click(function(){

        $(".chat2").css({
            "transform":"translateX(0px) translateY(0px)",
            "transition-duration":"1s"
        });

        $(".chat").css({
            "-webkit-transition-delay":"1s",
            "transform":"translateY(0px) translateX(0px)",
            "transition-duration":"1s"
        });

    });




    /*增加电话窗口*/
    $('.tel_close').click(function(){
        $('.tel').css({
            "transform":"translateX(260px)",
            "transition-duration":"0.5s"
        });
    });

    $('.tel_open').click(function(){
        $('.tel').css({
            "transform":"translateX(0px)",
            "transition-duration":"0.5s"
        });
    });


});


