$(function(){
    $(".first").click(function(){
        $(".f1 .one").show().siblings().hide();
       
    });
    $(".second").click(function(){
        $(".f1 .two").show().siblings().hide();
    });
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if (scroll > 500){
            $(".header").slideDown();
        }
        else{
            $(".header").slideUp();
        }
    });
    $(".one").css("display","block");
    $("div.part2 h3").click(function(){
        $(this).next().slideToggle();
        $("div.part2 p").not($(this).next()).slideUp();
    })
    $('.timer').countTo();
    $("html").niceScroll();
});