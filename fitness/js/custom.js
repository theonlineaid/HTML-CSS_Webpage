$(document).ready(function(){
	
	$('.toggle').click(function(){
		$('.nav').fadeToggle(500);
	});

	$(window).on('scroll',function() {    
		var scroll = $(window).scrollTop();
		if (scroll < 10) {
	 	$("#strick-header").removeClass("strick");
		}else{
		$("#strick-header").addClass("strick");
	   }
	});
	
	
	 $('.owl-carousel').owlCarousel({
		loop:true,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
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
	})
	
	new WOW().init();
	
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





