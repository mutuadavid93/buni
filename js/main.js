$(document).ready(function(){
	/*---------- NAVIGATION HAMBURGER ----------*/
	$(".navigation-hamburger").on("click", function(){
		if($(this).hasClass('-open')){
			$(this).removeClass('-open').addClass('-close');
			$('body').removeClass('menu-open');
		}
		else{
			$(this).removeClass('-close').addClass('-open');
			$('body').addClass('menu-open');
		}
	});
	
	
	/*---------- HOME SLIDER ----------*/
	if($('.home-slider.owl-carousel').length){
		$(".home-slider.owl-carousel").owlCarousel({
			items:1,
			responsiveRefreshRate:0,
			autoplay:false,
			mouseDrag:false,
			loop:false,
			nav:true,
			navText:["<i class='icon-arrow-left'></i>","<i class='icon-arrow-right'></i>"],
			dots:true,
			margin:20,
			onInitialized: function(){
				createSliderTabs();
			},
		});
	}
	
	/*---------- TABS ----------*/
	function createSliderTabs(){
		$(".tabs a").on("click", function(e){
			e.preventDefault();
			var tabID = $(this).attr("href");
			$(".tabs a").removeClass("active");
			$(this).addClass("active");
			$(".tab-content").removeClass("active");
			$(tabID).addClass("active");
		});
	}
	
	
});//End of document ready