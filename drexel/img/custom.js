/* Theme Customize JS */

(function($) {
	"use strict";
	// Create by Nguyen Duc Viet
	
	//cart dropdown
	$(document).on('click', '.topcart .icon-cart-header,.topcart .cart-toggler', function(){
		$(this).siblings('.topcart_content').stop().slideToggle(300);
	});
	
	$(document).on('click', '.top-search .dropdown-toggle', function(){
		$(this).next('.widget_product_search').stop().slideToggle(300);
	});
	
	//Category view mode
	$(document).on('click', '.view-mode > a', function(){
		$(this).addClass('active').siblings('.active').removeClass('active');
		if($(this).hasClass('grid')){
			$('#archive-product .shop-products').removeClass('list-view');
			$('#archive-product .shop-products').addClass('grid-view');
			$('#archive-product .list-col4').removeClass('col-xs-12 col-sm-4');
			$('#archive-product .list-col8').removeClass('col-xs-12 col-sm-8');
		}else{
			$('#archive-product .shop-products').addClass('list-view');
			$('#archive-product .shop-products').removeClass('grid-view');
			$('#archive-product .list-col4').addClass('col-xs-12 col-sm-4');
			$('#archive-product .list-col8').addClass('col-xs-12 col-sm-8');
		}
	});
	//categories accordion
	$(document).on('click', '.widget_product_categories li.cat-parent > i.opener, .widget_categories li.cat-item > i.opener', function(){
		var el = $(this).parent();
		if(el.hasClass('opening')){
			el.removeClass('opening').children('ul').stop().slideUp(300);
		}else{
			el.siblings('.opening').removeClass('opening').children('ul').stop().slideUp(300);
			el.addClass('opening').children('ul').slideDown(300);
		}
	});
	//quickview button
	$(document).on('click', 'a.quickview', function(event){
		event.preventDefault();
		var productID = $(this).attr('data-quick-id');
		showQuickView(productID);
	});

	$(document).on('click', '.closeqv', function(){
		hideQuickView();
	});
	
	//Go to top
	$(document).on('click', '#back-top', function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
	
	//toggle menu
	$(document).on('click', '.col-menu-control .toggle-action', function(){
		$(this).toggleClass('active');
		$(this).closest('.header').find('.absolute-menu').stop().slideToggle('300');
	});
	
	//sidebar toggle for mobile
	$(document).on('click', '.sidebar-toggle', function(){
		$(this).parent().toggleClass('opening');
		$(this).siblings().slideToggle(400);
	});
	$(document).on('click', '.vc-video-popup', function(){
		var $src = $(this).parent().find('iframe').attr('src');
		$(this).data('link', $src);
		if($src.indexOf('?') != -1){
			$src = $src + '&autoplay=1';
		}else{
			$src = $src + '?autoplay=1';
		}
		
		$(this).parent().find('iframe').attr('src', $src);
		$(this).siblings('.v-lightbox').fadeIn(300);
	});
	
	$(document).on('click', '.v-lightbox a.v-close, .v-lightbox .overlay-bg', function(){
		$(this).closest('.v-lightbox').fadeOut(300);
		var $src = $(this).closest('.wpb_wrapper').find('a.vc-video-popup').data('link');
		$(this).closest('.v-lightbox').find('iframe').attr('src', $src);
	});
	
	// show all search results
	$(document).on('click', '.drexel-autocomplete-search-results .last-total-result', function(){
		$(this).closest('form').submit();
	});
	$(document).on('click', 'body', function(e){
		if(!$(e.target).closest('form').hasClass('woocommerce-product-search')){
			$('.drexel-autocomplete-search-results').hide();
		}
	});
	
	// close theme verify
	$(document).on('click', '#drexel_missing_purchased_code .close', function(){
		$(this).parent().remove();
	});
})(jQuery);


jQuery(document).ready(function($){
	// ajax loading add to cart
	$('body').append('<div id="loading"></div>');
	$( document ).ajaxComplete(function( event, request, options ){
		if(options.url.indexOf('wc-ajax=add_to_cart') != -1){
			$('html, body').animate({scrollTop: 0}, 1000, function(){
				$('.topcart .topcart_content').stop().slideDown(500);
			});
		}
		$( "#loading" ).fadeOut(400);
	});
	
	//update wishlist count
	$('body').on('added_to_wishlist removed_from_wishlist', function(){
		$.post(
			ajaxurl, 
			{
				'action': 'update_wishlist_count'
			}, 
			function(response){
				$('.wishlist-link .wl-count').html(response);
			});
	});
	
	$( document ).ajaxSend(function(event, xhr, options){
		if(options.url.indexOf('wc-ajax=add_to_cart') != -1){
			$( "#loading" ).show();
		}
		if(options.url.indexOf('wc-ajax=get_refreshed_fragments') != -1){
			if($('body').hasClass('fragments_refreshed')){
				xhr.abort();
			}else{
				$('body').addClass('fragments_refreshed');
			}
		}
	});
	//categories accordion
	$('.widget_product_categories li.cat-parent').append('<i class="opener fa fa-plus"></i>');
	$('.widget_categories li.cat-item').each(function(){
		if($(this).children('.children').length){
			$(this).children('.children').hide();
			$(this).append('<i class="opener fa fa-plus"></i>');
		}
	});
	$('.widget_product_categories li.current-cat').addClass('opening').children('.children').show();
	if ($('.widget_product_categories li.current-cat').closest('li.cat-parent').length) {
		$('.widget_product_categories li.current-cat').closest('li.cat-parent').addClass('opening').children('.children').show();
	}
	
	//init for owl carousel
    var owl = $('[data-owl="slide"]');
	owl.each(function(index, el) {
		var $item = $(this).data('item-slide');
		var $rtl = $(this).data('ow-rtl');
		var $dots = ($(this).data('dots') == true) ? true : false;
		var $nav = ($(this).data('nav') == false) ? false : true;
		var $margin = ($(this).data('margin')) ? $(this).data('margin') : 0;
		var $desksmall_items = ($(this).data('desksmall')) ? $(this).data('desksmall') : (($item) ? $item : 4);
		var $tablet_items = ($(this).data('tablet')) ? $(this).data('tablet') : (($item) ? $item : 2);
		var $tabletsmall_items = ($(this).data('tabletsmall')) ? $(this).data('tabletsmall') : (($item) ? $item : 2);
		var $mobile_items = ($(this).data('mobile')) ? $(this).data('mobile') : (($item) ? $item : 1);
		var $tablet_margin = Math.floor($margin / 1.5);
		var $mobile_margin = Math.floor($margin / 3);
		var $default_items = ($item) ? $item : 5;
		
		var $autoplay = ($(this).data('autoplay') == true) ? true : false;
		var $autoplayTimeout = ($(this).data('playtimeout')) ? $(this).data('playtimeout') : 5000;
		var $smartSpeed = ($(this).data('speed')) ? $(this).data('speed') : 250;
		var $loop = false;
		if($autoplay) $loop = true;
		$(this).owlCarousel({
			loop : $loop,
			nav : $nav,
			dots: $dots,
			margin: $margin,
			rtl: $rtl,
			items : $default_items,
			autoplay: $autoplay,
			autoplayTimeout: $autoplayTimeout,
			smartSpeed: $smartSpeed,
			responsive:{
				0:{
			      items: $mobile_items, // In this configuration 1 is enabled from 0px up to 479px screen size 
				  margin: $mobile_margin
			    },

			    480:{
			      items: $tabletsmall_items, // from 480 to 677 default 1
				  margin: $tablet_margin
			    },

			    640:{
			      items: $tablet_items, // from this breakpoint 678 to 959 default 2
				  margin: $tablet_margin
			    },

			    991:{
			      items: $desksmall_items, // from this breakpoint 960 to 1199 default 3
				  margin: $margin

			    },
			    1199:{
			      items:$default_items,
			    }
			}
		});
	});
			
		
	// init Animate Scroll
	if( $('body').hasClass('drexel-animate-scroll') && !Modernizr.touch ){
		wow = new WOW(
			{
				mobile : false,
			}
		);
		wow.init();
	}
	
	// Scroll
	var currentP = 0;
	
	$(window).scroll(function(){
		var headerH = $('.header-container').height();
		var scrollP = $(window).scrollTop();
		
		if($(window).width() > 1024){
			if(scrollP != currentP){
				//Back to top
				if(scrollP >= headerH){
					$('#back-top').addClass('show');
				} else {
					$('#back-top').removeClass('show');
				}
				
				currentP = $(window).scrollTop();
			}
		}
		
		if($('.load-more-product.scroll-more').length){
			var mytop = parseInt($('.load-more-product').offset().top - $(window).height());
			if(scrollP >= mytop){
				loadmoreProducts();
			}
		}
	});
	
	//tooltip
	$('.yith-wcwl-share a, .link-follow a').each(function(){
		var text = $.trim($(this).text());
		var title = $.trim($(this).attr('title'));
		$(this).attr('data-toggle', 'tooltip');
		if(!title){
			$(this).attr('title', text);
		}
	});
	$('[data-toggle="tooltip"]').tooltip({container: 'body'});
	
	//sidebar for mobile
	$('#archive-product, #main-column').each(function(){
		if($(this).next('#secondary').length){
			$(this).next('#secondary').addClass('right-sidebar').append('<span class="visible-xs visible-sm sidebar-toggle fa fa-list-alt"></span>');
		}
		if($(this).prev('#secondary').length){
			$(this).prev('#secondary').addClass('left-sidebar').append('<span class="visible-xs visible-sm sidebar-toggle fa fa-list-alt"></span>');
		}
	});
	
	//mobile menu display
	$(document).on('click', '.nav-mobile .toggle-menu', function(){
		$(this).closest('.header').find('.mobile-navigation').stop().slideToggle(300);
	});
	$('.mobile-menu li.dropdown').append('<span class="toggle-submenu"><i class="fa fa-angle-right"></i></span>');
	$(document).on('click', '.mobile-menu li.dropdown .toggle-submenu', function(){
		if($(this).parent().siblings('.opening').length){
			var old_open = $(this).parent().siblings('.opening');
			old_open.children('ul').stop().slideUp(200);
			old_open.children('.toggle-submenu').children('.fa').removeClass('fa-angle-down').addClass('fa-angle-right');
			old_open.removeClass('opening');
		}
		if($(this).parent().hasClass('opening')){
			$(this).parent().removeClass('opening').children('ul').stop().slideUp(200);
			$(this).parent().children('.toggle-submenu').children('.fa').removeClass('fa-angle-down').addClass('fa-angle-right');
		}else{
			$(this).parent().addClass('opening').children('ul').stop().slideDown(200);
			$(this).parent().children('.toggle-submenu').children('.fa').removeClass('fa-angle-right').addClass('fa-angle-down');
		}
	});
	
	//gird layout auto arrange
	$('.auto-grid').each(function(){
		var $col = ($(this).data('col')) ? $(this).data('col') : 4;
		var $desktopsmall = ($(this).data('desktopsmall')) ? $(this).data('desktopsmall') : 0;
		var $tablet = ($(this).data('tablet')) ? $(this).data('tablet') : 0;
		var $tabletsmall = ($(this).data('tabletsmall')) ? $(this).data('tabletsmall') : 0;
		var $mobile = ($(this).data('mobile')) ? $(this).data('mobile') : 1;
		$(this).autoGrid({
			no_columns: $col,
			desktopsmall: $desktopsmall,
			tablet: $tablet,
			tabletsmall: $tabletsmall,
			mobile: $mobile
		});
	});
	
	//Fancy box for single project
	$(".prfancybox").fancybox({
		openEffect: 'fade',
		closeEffect: 'elastic',
		nextEffect: 'fade',
		prevEffect: 'fade',
		helpers:  {
			title : {
				type : 'inside'
			},
			overlay : {
				showEarly : false
			},
			buttons	: {},
			thumbs	: {
				width	: 100,
				height	: 100
			}
		}
	});
	$('.filter-options .btn').click(function(){
		$(this).siblings('.btn').removeClass('active');
		$(this).addClass('active');
		var filter = $(this).data('group');
		if(filter){
			if(filter == 'all'){
				$('#projects_list .project').removeClass('hide');
			}else{
				$('#projects_list .project').each(function(){
					var my_group = $(this).data('groups');
					console.log(my_group);
					if(my_group.indexOf(filter) != -1){
						$(this).removeClass('hide');
					}else{
						$(this).addClass('hide');
					}
				});
			}
		}
		$(window).resize();
	});
	
	//project gallery
	jQuery('.project-gallery .sub-images').owlCarousel({
		items: 5,
		nav :  false,
		dots: true,
		responsive:{
				0:{
			      items: 3
			    },

			    480:{
			      items: 3
			    },

			    640:{
			      items: 4
			    },

			    991:{
			      items: 5

			    },
			    1199:{
			      items: 5
			    }
			}
	});
	
	//product countdown
	window.setInterval(function(){
		$('.deals-countdown').each(function(){
			var me = $(this);
			var days = parseInt(me.find('.days_left').text());
			var hours = parseInt(me.find('.hours_left').text());
			var mins = parseInt(me.find('.mins_left').text());
			var secs = parseInt(me.find('.secs_left').text());
			if(days > 0 && hours >= 0 && mins >= 0 && secs >= 0){
				if(secs == 0){
					secs = 59;
					if(mins == 0){
						mins = 59;
						if(hours == 0){
							hours = 23;
							if(days = 0){
								hours = 0;
								mins = 0;
								secs = 0;
							}else{
								days = days - 1;
							}
						}else{
							hours = hours - 1;
						}
					}else{
						mins = mins - 1;
					}
				}else{
					secs = secs - 1;
				}
				me.find('.days_left').html(days);
				me.find('.hours_left').html(hours);
				me.find('.min_left').html(mins);
				me.find('.secs_left').html(secs);
			}
		});
	}, 1000);
});//end of document ready

jQuery(window).bind('load', function(){
	//re-arrange
	jQuery('.auto-grid').each(function(){
		var $col = (jQuery(this).data('col')) ? jQuery(this).data('col') : 4;
		jQuery(this).autoGrid({
			no_columns: $col
		});
	});
	setTimeout(function(){
		jQuery(window).resize();
	}, 300);
});//end of window loading

function showQuickView(productID){
	jQuery('#quickview-content').html('');
	window.setTimeout(function(){
		jQuery('.quickview-wrapper').addClass('open');
		
		jQuery.post(
			ajaxurl, 
			{
				'action': 'product_quickview',
				'data':   productID
			}, 
			function(response){
				jQuery('#quickview-content').html(response);
				jQuery('.quickview-wrapper .quick-modal').addClass('show');
				/*thumbnails carousel*/
				jQuery('.quick-thumbnails').addClass('owl-carousel owl-theme');
				jQuery('.quick-thumbnails').owlCarousel({
					items: 4,
					nav : false,
					dots: true
				});
				
				/* variable product form */
				if(jQuery('#quickview-content .variations_form').length){
					jQuery( '#quickview-content .variations_form' ).wc_variation_form();
					jQuery( '#quickview-content .variations_form .variations select' ).change();
				}
				
				/*thumbnail click*/
				jQuery('.quick-thumbnails a').each(function(){
					var quickThumb = jQuery(this);
					var quickImgSrc = quickThumb.attr('href');
					
					quickThumb.on('click', function(event){
						event.preventDefault();
						
						jQuery('.main-image').find('img').attr('src', quickImgSrc);
					});
				});
				/*review link click*/
				
				jQuery('.woocommerce-review-link').on('click', function(event){
					event.preventDefault();
					var reviewLink = jQuery('.see-all').attr('href');
					
					window.location.href = reviewLink + '#reviews';
				});
			}
		);
	}, 300);
}
function hideQuickView(){
	jQuery('.quickview-wrapper .quick-modal').removeClass('show');
	jQuery('.quickview-wrapper').removeClass('open');
}


var requesting = false;
function loadmoreProducts(){
	var url = jQuery('.woocommerce-pagination ul li .current').parent().next().children('a').attr('href');
	if(url && url.indexOf('page') != -1 && !requesting){
		requesting = true;
		jQuery('.load-more-product img').removeClass('hide');
		requesting = true;
		jQuery.get( url, function( data ) {
			var $data = jQuery(data);
			var $products = $data.find( '#archive-product .shop-products' ).html();
			jQuery('#archive-product .shop-products').append($products);
			jQuery('#archive-product .toolbar.tb-bottom').html($data.find( '#archive-product .toolbar.tb-bottom' ).html());
			jQuery('#archive-product .woocommerce-result-count span').html($data.find( '.woocommerce-result-count span' ).html());
			jQuery('#archive-product .toolbar .view-mode a.active').trigger('click');
			jQuery('.load-more-product img').addClass('hide');
			setTimeout(function(){requesting = false;}, 100);
		});
	}
}