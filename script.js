$(document).ready(function(){
    $(window).scroll(function(){
        $(".slideoff").each(function(){
            var elpos = $(this).offset().top;
            var winpos = $(window).scrollTop();

            if( elpos < winpos + 600){
                $(this).addClass('slideon');
            }
            else{
                $(this).removeClass('slideon');
            }
        });
    });    
});