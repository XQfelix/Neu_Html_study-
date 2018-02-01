/**
 * Created by HP-Envy-Yin on 2018/1/17.
 */
$(document).ready(function(){
    $('.wrap ul li').click(function() {

        var i = $(this).index();

        $('.wrap div').eq(i).addClass('show').removeClass('hide').siblings('.show').addClass('hide').removeClass('show');
        $('.wrap ul li').eq(i).addClass('color').siblings('.color').removeClass('color');
    });




    var a=1;
    setInterval(function(){
        $('.wrap div').eq(a).addClass('show').removeClass('hide').siblings('.show').addClass('hide').removeClass('show');
        $('.wrap ul li').eq(a).addClass('color').siblings('.color').removeClass('color');
        a++;
        if(a>4){
            a=0;
        }
    },4000);
});