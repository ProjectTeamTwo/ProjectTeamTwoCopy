$(function(){
    let origin=window.pageYOffset;
    add_active(origin);


    /***   sticky gnb   ***/
    window.addEventListener('scroll',function(){
        let scroll = window.pageYOffset;
        add_active(scroll);

    });

    /***   depth-02   ***/
    $('.gnb').hover(function(){
        $('.depth-02>div').addClass('active');
    },function(){
        $('.depth-02>div').removeClass('active');
    })

    // $('.gnb').hover(function(){
    //         $('.depth-02').css({display:'block', height:'0'}).stop().animate({height:"200px"}, "fast");
    // },function(){
    //     $('.depth-02').stop().animate({height:'0'}, 'fast', function(){
    //         $('.depth-02').css({display:'none'})
    //     });
    // });

    window_resize();
    window.addEventListener('resize',function(){
        window_resize();
    })
});

function add_active(scroll){
    if(scroll>0){
        $('.header').addClass('active');
        $('.header_first').addClass('active'); 
    }else{
        $('.header').removeClass('active');
        $('.header_first').removeClass('active'); 
    }
}


function window_resize(){
    if(window.innerWidth<1920 && window.innerWidth>1050){
            
                let window_width = this.innerWidth;
                let background_move_locate = document.querySelector('.depth-02>div');
                
                background_move_locate.style.backgroundPosition=(130+(window_width-(1920))) +'px 100%'; 
            
            
        }
}