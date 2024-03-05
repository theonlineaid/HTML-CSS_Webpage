$(document).ready(function(){
	
	// wow activation
	new WOW().init();
	
	// burger menu
	$('.burger').click(function(){
		$('.main-menu').fadeToggle(500);
	});
	
	// sticky heder
	$(window).on('scroll',function() {    
		var scroll = $(window).scrollTop();
		if (scroll < 10) {
		$("#stricy-header").removeClass("sticky");
		}else{
		$("#stricy-header").addClass("sticky");
	   }
	});

	// hum burger menu activation
	$(window).on('scroll',function() {    
		var scroll = $(window).scrollTop();
		if (scroll < 5) {
		$("#hum-burger").removeClass("stick");
		}else{
		$("#hum-burger").addClass("stick");
	   }
	});
	
	
	$('.slider-active').owlCarousel({
		loop:true,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	$('.client-spece').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	$('.brand-active').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });
	
	$.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
  
  
});





