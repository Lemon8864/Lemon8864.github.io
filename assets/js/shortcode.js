jQuery(function($) {

	"use strict";

	var builday_core = window.builday_core || {};



	builday_core.sc_product = function() {

		$(".products-01.style-01").each(function(){

			var $main_slider = $(this).find('.main-slider');

			var $nav_slider = $(this).find('.nav-slider');

			$main_slider.slick({

				fade:true,

				slidesToShow: 1,

				slidesToScroll: 1,

				dots: true,

				asNavFor: $nav_slider,

				focusOnSelect: true

			});

			$nav_slider.slick({

				fade:true,

				asNavFor: $main_slider,

				adaptiveHeight: true,

				dots: false,

				arrows: false,

				slidesToShow: 1,

				slidesToScroll: 1,

				focusOnSelect: true

			});

		});

		$(".products-01").not('.style-07').on("beforeChange", function(event, slick, currentSlideIndex, nextSlideIndex){

			var currentSlide = ".nav-slider div[data-slick-index='"+currentSlideIndex+"']";

			var nextSlide = ".nav-slider div[data-slick-index='"+nextSlideIndex+"']";

			$(this).find(currentSlide).removeClass("animated fadeInUpShort");

			$(this).find(nextSlide).addClass("animated fadeInUpShort");

		});

		$(".products-01.style-02").each(function(){

			var $main_slider = $(this).find(".main-slider");

			var $nav_slider = $(this).find(".nav-slider");

			var slide_toshow = parseInt($main_slider.attr("data-slide-toshow"));

			if (!slide_toshow) {

				slide_toshow = 4;

			}

			$main_slider.slick({

				slidesToShow: slide_toshow,

				slidesToScroll: 1,

				arrows: true,

				infinite: true,

				asNavFor: $nav_slider,

				focusOnSelect: true,

				responsive: [

					{

						breakpoint: 480,

						settings: {

							slidesToShow: 1,

							dots: true

						}

					}

				]

			});

			$nav_slider.slick({

				fade:true,

				asNavFor: $main_slider,

				dots: false,

				arrows: false,

				infinite: true,

				slidesToShow: 1,

				slidesToScroll: 1,

				draggable: false,

				adaptiveHeight: true

			});

		});

		$(".products-01.style-03").each(function(){

			var $main_slider = $(this).find(".main-slider");

			var $nav_slider = $(this).find(".nav-slider");

			var main_item = parseInt($main_slider.attr("data-slide-toshow"));

			var nav_item = parseInt($nav_slider.attr("data-slide-toshow"));

			var centermode = true;

			if ( !$.isNumeric(main_item) ) {

				main_item = 3;

			}

			if ( !$.isNumeric(nav_item) ) {

				nav_item = 1;

			}

			if ( main_item % 2 === 0 ) {

				centermode = false;

			}

			$main_slider.slick({

				slidesToShow: main_item,

				slidesToScroll: 1,

				dots: false,

				arrows: true,

				asNavFor: $nav_slider,

				focusOnSelect: true,

				centerMode: centermode,

				centerPadding: '20px',

				nextArrow: "<a class='arrow-slide arrow-next'><i class='fa fa-chevron-right'></i></a>",

				prevArrow: "<a class='arrow-slide arrow-prev'><i class='fa fa-chevron-left'></i></a>",

				responsive: [

					{

					   breakpoint: 480,

					   settings: {

						slidesToShow: 1

					  }

					}

				]

			});

			$nav_slider.slick({

				slidesToShow: nav_item,

				slidesToScroll: 1,

				fade:true,

				asNavFor: $main_slider,

				adaptiveHeight: true,

				dots: false,

				arrows: false,

				infinite: true,

				focusOnSelect: true,

				responsive: [

					{

					   breakpoint: 480,

					   settings: {

						slidesToShow: 1

					  }

					}

				]

			});

		});

		$(".products-01.style-04").each(function(){

			var $nav_slider = $(this).find(".nav-slider");

			var item = parseInt($nav_slider.data("item"));

			if (!item) {

				item = 3;

			}



			$nav_slider.slick({

				fade: false,

				dots: false,

				arrows: true,

				infinite: false,

				slidesToShow: item,

				slidesToScroll: 1,

				vertical: true,

				focusOnSelect: true,

				nextArrow: "<a class='arrow-slide arrow-next'><i class='fa fa-chevron-right'></i></a>",

				prevArrow: "<a class='arrow-slide arrow-prev'><i class='fa fa-chevron-left'></i></a>",

				responsive: [

					{

					   breakpoint: 1025,

					   settings: {

						slidesToShow: 2

					  }

					}

				]

			});

		});

		$(".products-01.style-07").each(function(){

			var $nav_slider = $(this).find(".nav-slider");

			var item = parseInt($nav_slider.data("item").replace('col-',''));

			if (!item) {

				item = 4;

			}



			$nav_slider.slick({

				fade:false,

				dots: false,

				arrows: true,

				infinite: true,

				slidesToShow: item,

				slidesToScroll: 1,

				focusOnSelect: true,

				nextArrow: "<a class='arrow-slide arrow-next'><i class='fa fa-chevron-right'></i></a>",

				prevArrow: "<a class='arrow-slide arrow-prev'><i class='fa fa-chevron-left'></i></a>",

				responsive: [

					{

					   breakpoint: 480,

					   settings: {

						slidesToShow: 1,

						dots: true

					  }

					}

				]

			});

		});

		$(".products-02.carousel-02").on("beforeChange", function(event, slick, currentSlideIndex, nextSlideIndex){

			var currentSlide = ".nav-slider div[data-slick-index='"+currentSlideIndex+"']";

			var nextSlide = ".nav-slider div[data-slick-index='"+nextSlideIndex+"']";

			$(this).find(currentSlide).removeClass("animated fadeInUpShort");

			$(this).find(nextSlide).addClass("animated fadeInUpShort");

		});

		$(".products-02.carousel-02").each(function(){

			var $main_slider = $(this).find(".main-slider");

			var $nav_slider = $(this).find(".nav-slider");

			var slide_toshow = parseInt($main_slider.attr("data-slide-toshow"));

			if (!slide_toshow) {

				slide_toshow = 4;

			}

			$main_slider.slick({

				slidesToShow: slide_toshow,

				slidesToScroll: 1,

				arrows: true,

				asNavFor: $nav_slider,

				focusOnSelect: true,

				responsive: [

					{

					   breakpoint: 480,

					   settings: {

						slidesToShow: 1,

						dots: true

					  }

					}

				]

			});

			$nav_slider.slick({

				fade:true,

				asNavFor: $main_slider,

				dots: false,

				arrows: false,

				infinite: true,

				slidesToShow: 1,

				slidesToScroll: 1,

				focusOnSelect: true,

				draggable: false,

				adaptiveHeight: true

			});

		});

		$(".products-02.carousel-01").each(function(){

			var $nav_slider = $(this).find(".nav-slider");

			$nav_slider.slick({

				fade:false,

				dots: false,

				arrows: true,

				infinite: true,

				slidesToShow: 3,

				slidesToScroll: 1,

				focusOnSelect: true,

				nextArrow: "<a class='arrow-slide arrow-next'><i class='fa fa-chevron-right'></i></a>",

				prevArrow: "<a class='arrow-slide arrow-prev'><i class='fa fa-chevron-left'></i></a>",

				responsive: [

					{

					   breakpoint: 480,

					   settings: {

						slidesToShow: 1,

						dots: true

					  }

					}

				]

			});

		});

		$(".product-featured-image").each(function(){

			var $main_slider = $(this).find(".main-slider .slides");

			var $nav_slider = $(this).find(".nav-slider .slides");

			$main_slider.slick({

				slidesToShow: 1,

				slidesToScroll: 1,

				arrows: false,

				fade: true,

				asNavFor: $nav_slider

			});

			$nav_slider.slick({

				asNavFor: $main_slider,

				dots: false,

				arrows: true,

				infinite: true,

				slidesToShow: 4,

				slidesToScroll: 1,

				focusOnSelect: true,

				responsive: [

					{

					   breakpoint: 480,

					   settings: {

						slidesToShow: 2,

						dots: true

					  }

					}

				]

			});

		});

	};

	// SC Time line

	builday_core.sc_time_line = function() {

		var item_hmax = 0;

		// $(".swin-sc-timeline .timeline-content-item").each(function(){

		// 	var item_height = $(this).height();

		// 	if( item_height > item_hmax ){

		// 		item_hmax = item_height;

		// 	}

		// });

		// $(".swin-sc-timeline .timeline-content-item").each(function(){

		// 	$(this).css("cssText", "height: " + item_hmax + "px");

		// });



		$(".swin-sc-timeline").each(function(){

			var item = parseInt($(this).attr("data-item"));

			var $main_slider = $(this).find(".main-slider .slides");

			var $nav_slider = $(this).find(".nav-slider .slides");

			$main_slider.slick({

				animation: 'slide',

				slidesToShow: item,

				slidesToScroll: 1,

				arrows: true,

				asNavFor: $nav_slider,

				focusOnSelect: true,

				vertical: true,

				infinite: true,

				responsive: [

				    {

				      breakpoint: 769,

				      settings: {

				        vertical: false,

				      }

				    },

				    {

				      breakpoint: 481,

				      settings: {

				        slidesToShow: 1,

				        nextArrow: "<a class='arrow-slide arrow-next'><i class='fa fa-chevron-right'></i></a>",

						prevArrow: "<a class='arrow-slide arrow-prev'><i class='fa fa-chevron-left'></i></a>",

						vertical: false,

				      }

				    }, 

				]

			});

			$nav_slider.slick({

				asNavFor: $main_slider,

				dots: false,

				arrows: false,

				infinite: false,

				slidesToShow: 1,

				slidesToScroll: 1,

				focusOnSelect: true,

				vertical: true,

				infinite: true,

				// adaptiveHeight: true,

				// variableWidth: false,

				centerMode: false,

				responsive: [

				    {

				      breakpoint: 769,

				      settings: {

				        vertical: false,

				      }

				    }, 

				]

			});

		});

	};



	//SC Partner

	builday_core.sc_partner = function() {

		$(".swin-sc-partner").each(function(){

			var data_item = parseInt($(this).attr("data-item"));

			$(this).find('.slides').slick({

				dots: false,

				arrows:false,

				infinite: true,

				autoplay: true,

				autoplaySpeed: 2000,
				
				slidesToShow: data_item,

				slidesToScroll: 1,

				responsive: [

					{

					   breakpoint: 769,

					   settings: {

						slidesToShow: 4

					  }

					},

					{

					   breakpoint: 480,

					   settings: {

						slidesToShow: 2

					  }

					}

				]

			});

		});

	};



	//SC image slider

	builday_core.sc_image_slider = function() {

		$(".swin-sc-image-slider").each(function(){

			$(this).find('.slides').slick({

				dots: true,

				arrows:true,

				infinite: true,

				slidesToShow: 1,

				slidesToScroll: 1,

				nextArrow: "<a class='arrow-slide arrow-next'><i class='fa fa-chevron-right'></i></a>",

				prevArrow: "<a class='arrow-slide arrow-prev'><i class='fa fa-chevron-left'></i></a>",

			});

		});

	};



	//Sc Counter

	builday_core.sc_counter = function() {

		$(".timer").each(function(){

			var $this = $(this);

			$this.appear();

			$this.on("appear", function(){

				$(this).countTo();

			});

		});

	};



	// Gallery

	builday_core.sc_gallery = function() {

		$(".swin-sc-isotope .grid").each(function(){

			$(this).isotope({

				// options

				itemSelector: '.grid-item',

				percentPosition: true,

				masonry: {

					// use outer width of grid-sizer for columnWidth

					columnWidth: '.grid-sizer'

				}

			});

		});

	};



	// Testimonial

	builday_core.sc_testimonial = function() {

		$(".swin-sc-testimonial").each(function(){

			var $main_slider = $(this).find(".main-slider .slides");

			$main_slider.slick({

				animation: 'slide',

				slidesToShow: 2,

				slidesToScroll: 1,

				dots: true,

				arrows: true,

				nextArrow: "<a class='arrow-slide arrow-next'><i class='fa fa-chevron-right'></i></a>",

				prevArrow: "<a class='arrow-slide arrow-prev'><i class='fa fa-chevron-left'></i></a>",

				responsive: [

				    {

				      breakpoint: 992,

				      settings: {

				        slidesToShow: 1,

				      }

				    },

			  	]

			});

		});

	};



	// Team Slider

	builday_core.sc_team = function() {

		// Team slider

		$(".swin-sc-team-slider.has_slider").each(function(){

			var column = $(this).data("slidestoshow");

			if(!column){

				column = 3;

			}

			$(this).slick({

				dots: false,

				arrows: false,

				infinite: true,

				slidesToShow: column,

				slidesToScroll: 1,

				focusOnSelect: true,

				centerMode: true,

				centerPadding: '2px',

				nextArrow: "<a class='arrow-slide arrow-next'><i class='fa fa-chevron-right'></i></a>",

				prevArrow: "<a class='arrow-slide arrow-prev'><i class='fa fa-chevron-left'></i></a>",

				responsive: [

					{

					  breakpoint: 1025,

					  settings: {

							slidesToShow: 3

					  }

					},

					{

					  breakpoint: 992,

					   settings: {

						slidesToShow: 2

					  }

					},

					{

					  breakpoint: 700,

					  settings: {

							slidesToShow: 1

					  }

					}

				]

			});

		});

	};





	// Blog Slider

	builday_core.sc_blog = function() {

		$(".swin-sc-blog-slider.has-slider").each(function(){

			var $main_slider = $(this).find(".main-slider .slides");

			$main_slider.slick({

				slidesToShow: 1,

				slidesToScroll: 1,

				arrows: true,

				adaptiveHeight: true,

				nextArrow: "<a class='arrow-slide arrow-next'><i class='fa fa-chevron-right'></i></a>",

				prevArrow: "<a class='arrow-slide arrow-prev'><i class='fa fa-chevron-left'></i></a>",

			});

		});

		//format gallery

		$(".blog-gallery").each(function(){

			$(this).slick({

				animation: 'slide',

				slidesToShow: 1,

				slidesToScroll: 1,

				adaptiveHeight: true,

				dots:false,

				arrows:true,

				nextArrow: "<a class='arrow-slide arrow-next'><i class='fa fa-chevron-right'></i></a>",

				prevArrow: "<a class='arrow-slide arrow-prev'><i class='fa fa-chevron-left'></i></a>",

			});

		});

	};



	builday_core.sc_blog_masonry = function() {



		$(".swin-sc-blog-masonry .grid").each(function(){

			$(this).isotope({

				// options

				itemSelector: '.grid-item',

				percentPosition: true,

				masonry: {

					// use outer width of grid-sizer for columnWidth

					columnWidth: '.grid-sizer'

				}

			});

		});

	};



	builday_core.post_format_video = function() {



		// Find all YouTube videos

		var $allVideos = $("iframe[src^='youtube.com'],iframe[src^='https://player.vimeo.com']"),



			// The element that is fluid width

			$fluidEl = $("body");



		// Figure out and save aspect ratio for each video

		$allVideos.each(function() {



		  $(this)

			.data('aspectRatio', this.height / this.width)



			// and remove the hard coded width/height

			.removeAttr('height')

			.removeAttr('width');



		});

	};



	// SC Service Tab

	builday_core.sc_service_tab = function() {

		$(".swin-sc-service-tab").each(function(){

			var item = parseInt($(this).attr("data-item"));

			var $main_slider = $(this).find(".main-slider .slides");

			var $nav_slider = $(this).find(".nav-slider .slides");

			$main_slider.slick({

				animation: 'slide',

				slidesToShow: item,

				slidesToScroll: 1,

				arrows: true,

				asNavFor: $nav_slider,

				focusOnSelect: true,

				vertical: true,

			});

			$nav_slider.slick({

				asNavFor: $main_slider,

				dots: false,

				arrows: false,

				infinite: false,

				slidesToShow: 1,

				slidesToScroll: 1,

				focusOnSelect: true,

				// vertical: true,

				adaptiveHeight: true

			});

		});

	};



	// SC Service Carousel

	builday_core.sc_service_carousel = function() {

		$(".swin-sc-service-carousel").each(function(){

			var item = parseInt($(this).attr("data-item"));

			var $main_slider = $(this).find(".main-slider .slides");

			$main_slider.slick({

				animation: 'slide',

				slidesToShow: item,

				slidesToScroll: 1,

				centerMode: true,

				centerPadding: '10px',

				focusOnSelect: true,

				arrows:true,

				nextArrow: "<a class='arrow-slide arrow-next'><i class='fa fa-chevron-right'></i></a>",

				prevArrow: "<a class='arrow-slide arrow-prev'><i class='fa fa-chevron-left'></i></a>",

				responsive: [

			    {

			      breakpoint: 769,

			      settings: {

			        slidesToShow: 3,

			        slidesToScroll: 1,

			        centerPadding: '0',

			      }

			    },

			    {

			      breakpoint: 481,

			      settings: {

			        slidesToShow: 1,

			        slidesToScroll: 1, 

			      }

			    }

			  ]

			});

		});

	};



	builday_core.sc_project_grid = function() {

		$('.swin-sc-project-grid').each(function(){

			var $container = $(this);

			var $grid = $container.find('.grid');

			var $filter = $container.find('.filter');

			$grid.isotope({

				// options

				itemSelector: '.grid-item',

				layoutMode: 'fitRows'

			});

			$filter.find('a').click(function(){

				$(this).siblings().removeClass('active');

				$(this).addClass('active');

			  	var selector = $(this).attr('data-filter');

			  	$grid.isotope({ filter: selector });

			  	return false;

			});

		})

	}



	// Project Masonry

	builday_core.sc_project_masonry = function() {

		$(".swin-sc-project-masonry .grid").each(function(){

			$(this).isotope({

				// options

				itemSelector: '.grid-item',

				percentPosition: true,

				masonry: {

					// use outer width of grid-sizer for columnWidth

					columnWidth: '.grid-sizer'

				}

			});

		});

	};



	builday_core.audio = function() {

		audiojs.events.ready(function() {

			var as = audiojs.createAll();

		});

	};



	builday_core.lightbox = function() {

		$('.mfp-iframe').each(function(){

			$(this).magnificPopup({

			  	type: 'image'

			  	// other options

			});

		});

	};



	/*------------------------------------------------------------------

	Initialize Function

	-------------------------------------------------------------------*/

	// Initialize function when document load

	$(document).ready(function(){

		builday_core.sc_partner();

		builday_core.sc_time_line();

		builday_core.sc_counter();

		builday_core.sc_gallery();

		builday_core.sc_testimonial();

		builday_core.sc_team();

		builday_core.sc_blog_masonry();

		builday_core.sc_blog();

		builday_core.sc_product();

		builday_core.post_format_video();

		builday_core.audio();

		builday_core.lightbox();

		builday_core.sc_image_slider();

		builday_core.sc_service_tab();

		builday_core.sc_service_carousel();

		builday_core.sc_project_grid();

		builday_core.sc_project_masonry();

	});

	$(window).resize(function() {

		// sc time line

		var item_hmax = 0;

		$(".swin-sc-timeline .timeline-content-item").each(function(){

			var item_height = $(this).height();

			if( item_height > item_hmax ){

				item_hmax = item_height;

			}

		});

		$(".swin-sc-timeline .timeline-content-item").each(function(){

			$(this).css("cssText", "height: " + item_hmax + "px");

		});

	});

	$(window).load(function() {

		builday_core.sc_blog_masonry();

	});

});



