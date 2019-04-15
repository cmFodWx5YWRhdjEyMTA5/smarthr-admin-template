(function($) {
    "use strict";

    $(document).on('ready', function() {
		
	/* Header scroll on fixed */
	
	var NavBar = $('nav.navbar');
    var didScroll;
    var lastScrollTop = 0;
    var navbarHeight = NavBar.outerHeight();
    $(document).ready(function(event) {
        didScroll = true;
    });
    $(window).scroll(function(event) {
        didScroll = true;
    });
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 100);

    function hasScrolled() {
        var st = $(document).scrollTop();
        if (st + $(window).height() < $(document).height()) {
            NavBar.addClass('fixed-header');
            if (st == 0) {
                NavBar.removeClass('fixed-header');
            }
        }
        lastScrollTop = st;
    }


        /* ==================================================
            # Smooth Scroll
         ===============================================*/
        $("body").scrollspy({
            target: ".navbar-collapse",
            offset: 200
        });
        $('a.smooth-menu').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '75';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
		
		
		
		$('[data-toggle="tooltip"]').tooltip();
		
		$('[data-toggle="popover"]').popover();
		
		$(".owl-carousel").owlCarousel({
		    center: true,
		    items:2,
		    lazyLoad:true,
		    loop:true,
		    margin:40,
		    autoplay:true,
		    dots:true,
		    smartSpeed:800,
		    autoplayTimeout:3500,
		    autoplayHoverPause:false
		});
		
	
    $(window).on ('load', function (){ // makes sure the whole site is loaded
		
		$('#loader').delay(100).fadeOut('slow');
		$('#loader-wrapper').delay(500).fadeOut('slow');
		$('body').delay(500).css({'overflow':'visible'});
		
		AOS.init({
          duration: 1000,
		  disable: 'mobile',
          mirror: true
        });


    });

    }); // end document ready function
})(jQuery); // End jQuery