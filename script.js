$(document).ready(function(){



    $(".navbvar__list--element, .footer_wrapper a[href='#home']").on('click', function(element){
        if (this.hash !== ""){
            element.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 1900);
        }
    });

    $(window).scroll(function(){

        var winpos = $(window).scrollTop();
        
        $(".slideoff").each(function(){
            var elpos = $(this).offset().top;
    
            if( elpos < winpos + 600){
                $(this).addClass('slideon');
            }
            else{
                $(this).removeClass('slideon');
            }
        });

        if(winpos > 10){
            $(".navbar").addClass("navbar--scrolled");
        }
        else{
            $(".navbar").removeClass("navbar--scrolled");
        }
    });  
    
    $(".burger--menu").on('click', ()=>{
        $(".navbar").toggleClass("navbar--clicked");
        if($(".navbar").hasClass("navbar--clicked")){
            $(".navbar__list").css("display","block");
        }
        else{
            $(".navbar__list").css("display","none");
        }
    })
});