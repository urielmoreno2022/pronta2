$(document).ready(function(){
    var altura = $('nav').offset().top;
    $(window).on('scroll',function(){
        if ($(window).scrollTop() > 510){
            $('nav').addClass('shrink');
        }else{
            $('nav').removeClass('shrink');
            $('nav').addClass('top');
        }
    })
});