/**
 * Created by HP-Envy-Yin on 2018/1/18.
 */
$(function(){
    $('.btn li').click(function(){
        var i=$(this).index();
        $('.split').each(function(index,element){
            $(element).children('p').eq(i).addClass('show').removeClass('hide').siblings('.show')
                .addClass('hide').removeClass('show');

        $('.btn').children().eq(i).addClass('color').siblings('.color').removeClass('color');

        });

    });

});