jQuery(function ($) {
	"use strict";
	/**
	 * @param {{builday:string}} data
	 */
	var builday = window.builday || {};
	/*------------------------------------------------------------------
	This file include js code for shortcode, element in main content
	-------------------------------------------------------------------*/
	builday.mainLayoutFuntion = function () {
		$('#totop').on('click', function () {
			$('html, body').animate({ scrollTop: 0 }, 'slow');
			return false;
		});

		//skrollr on page title
		if ($(window).width() > 1024) {
			var s = skrollr.init({ forceHeight: false });
		}
	};

	// Set menu fixed when scroll
	builday.menuScroll = function () {
		var window_height = $(window).height();
		$(window).bind('scroll load', function () {
			if ($(this).scrollTop() > window_height) {
				$(".sticky-enable header").addClass("header-fixed");
				$(".adminbar-on header").addClass("header-fixed"); // When Admin View
				$('#totop').removeClass('zoomOut');
				$('#totop').addClass('zoomIn');
				$('#totop').fadeIn();
			} else {
				$("header").removeClass("header-fixed");
				$('#totop').addClass('zoomOut');
				$('#totop').removeClass('zoomIn');
				$('#totop').fadeOut();
			}
		});
	};

	// Menu Hover
	builday.menuHover = function () {
		// Dropdown Hover
		$('ul#main-nav li.dropdown').hover(function () {
			var $this = $(this);
			$this.find('.dropdown-menu').show();
			setTimeout(function () {
				$this.addClass('open');
			}, 200)
		}, function () {
			var $this = $(this);
			$this.find('.dropdown-menu').hide();
			setTimeout(function () {
				$this.removeClass('open');
			}, 200)
		});
	};

	// Menu Offcanvas for table and mobile device
	builday.menuOffcanvas = function () {

		// Using class swin-transition to check this function run already or not - Avoid run double time
		$(".wrapper-content").addClass('swin-transition');

		// Task in Offcanvas
		function openNav() {
			$('body').toggleClass('offcanvas-on');
		}

		function closeNav() {
			$('body').removeClass('offcanvas-on');
		}

		$('.open-offcanvas').off('click').on('click', function () {
			openNav();
		});

		$('.close-offcanvas').off('click').on('click', function () {
			closeNav();
		});

		$('#main-nav').find(".btn-open-dropdown").off('click').on('click', function (e) {
			e.preventDefault();
			$(this).parent().next().toggleClass('open');
		});

	};

	// Top Slider
	builday.topSlider = function () {
		// set width for SVG of top slider
		var container_width = $('body').width();
		$('.bg-svg').css('width', container_width + 6);
		$('.top-slider.sliders .slides').slick({
			dots: true,
			arrows: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			speed: 1000,
			customPaging: function (slider, i) {
				i++;
				if (i < 10) {
					return '<a class="slide-dot swin-font-oswald">0' + i + '</a>';
				} else {
					return '<a class="slide-dot swin-font-oswald>' + i + '</a>'
				}
			},
		});

		// Active first slide
		$('.top-slider.sliders .slides .slick-current .animated').each(function () {
			$(this).addClass($(this).attr('data-ani-in'));
		});

		$('.top-slider.sliders .slides').on('beforeChange', function (event, slick, currentIndex, nextIndex) {
			var nextSlide = $(this).find("div[data-slick-index='" + nextIndex + "']");
			var next_caption = nextSlide.find('.animated');
			var caption_current = $(this).find('.slick-current .animated');

			caption_current.each(function () {
				var $this = $(this);
				$this.removeClass($this.attr('data-ani-in'));
			});

			next_caption.each(function () {
				var $this = $(this);
				if ($this.attr('data-ani-delay')) {
					setTimeout(function () {
						$this.removeClass($this.attr('data-ani-out')).addClass($this.attr('data-ani-in'));
					}, $this.attr('data-ani-delay'));
				} else {
					$this.removeClass($this.attr('data-ani-out')).addClass($this.attr('data-ani-in'));
				}
			});

		});

		// Parallax Background
		function buildBackgroundParallax($el) {
			$(window).on('scroll', function () {
				var scroll = $(document).scrollTop();
				$el.css({
					'top': (scroll - 100) * 0.8 + 'px',
				});
			});
		}

	};

	/*------------------------------------------------------------------
	Initialize Function
	-------------------------------------------------------------------*/
	$(document).ready(function () {
		// Main function
		builday.mainLayoutFuntion();
		builday.menuScroll();
		builday.topSlider();

		// Check Menu Style
		if ($(window).width() < 1025) {
			// active offcanvas menu
			builday.menuOffcanvas();
		} else {
			// active hover menu
			builday.menuHover();
		}

	});

	$(window).resize(function () {
		// Recalculate slider 2 widthcontainer_width
		$('.bg-svg').css('width', $('body').width());
		if ($(window).width() < 1025) {
			builday.menuOffcanvas();
		} else {
			builday.menuHover();
		}
	});
});
