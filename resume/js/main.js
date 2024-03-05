(function($) {
    "use strict";

    // $('.slider-img').owlCarousel({
    //     loop:true,
    //     nav:true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:1
    //         },
    //         1000:{
    //             items:1
    //         }
    //     }
    // });
    $(document).ready(function() {
        $(window).scroll(function(e) {
            var s = $(window).scrollTop(),
                opacityVal = (s / 200);
    
            $('.blurred-image').css('opacity', opacityVal);
        });
    });

    
})(jQuery);