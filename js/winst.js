/*
  [JS Index]
  
  ---
  
  Template Name: Winst - Photography Portfolio Template
  Author:  ex-nihilo
  Version: 1.2
*/


/*
  1. preloader
  2. show Timeout
    2.1. show fadeIn
    2.2. show borders
    2.3. show elements
  3. navigation
    3.1. page scroll
    3.2. highlight navigation
    3.3. close mobile menu
	3.4. highlight navigation
    3.5. collapse navigation
  4. animate elements
  5. animate home title
  6. hide elements
  7. social icons share
  8. facts counter
  9. skills bar
  10. forms
    10.1. newsletter form
    10.2. contact form
  11. contact modal
    11.1. contact modal additional CLOSER
  12. slick slider
    12.1. slick testimonials slideshow, slick fullscreen slideshow
  13. YouTube player
    13.1. highlight YouTube player navigation
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. show Timeout
        // 2.1. show fadeIn
        setTimeout(function() {
            $(".fadeIn-element").delay(1600).css({
                display: "none"
            }).fadeIn(1200);
        }, 0);
        // 2.2. show borders
        setTimeout(function() {
            $(".border-top").removeClass("top-position");
        }, 800);
        setTimeout(function() {
            $(".border-bottom").removeClass("bottom-position");
        }, 800);
        setTimeout(function() {
            $(".border-left").removeClass("left-position");
        }, 800);
        setTimeout(function() {
            $(".border-right").removeClass("right-position");
        }, 800);
        // 2.3. show elements
        setTimeout(function() {
            $(".logo, .main-navigation").removeClass("top-position");
        }, 1200);
        setTimeout(function() {
            $(".bottom-credits, .social-icons-wrapper-share").removeClass("bottom-position");
        }, 1200);
        setTimeout(function() {
            $(".line-left").removeClass("left-position");
        }, 1200);
        setTimeout(function() {
            $(".line-right").removeClass("right-position");
        }, 1200);
    });
	
    // 3. navigation
    // 3.1. page scroll
    $(".page-scroll").on("click", function(e) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top - 70
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });
    // 3.2. highlight navigation
    $("body").scrollspy({
        target: ".navbar",
        offset: 75
    });
    // 3.3. close mobile menu
    $(".navbar-collapse ul li a").on("click", function() {
        $(".navbar-toggle:visible").click();
    });
    // 3.4. highlight navigation
    $(".link-underline-menu").on("click", function() {
        $(".link-underline-menu").removeClass("active");
        $(this).addClass("active");
    });
	
    $(window).on("scroll", function() {
        // 3.5. collapse navigation
        if ($(".navbar").offset().top > 50) {
            $(".navbar-bg-switch").addClass("main-navigation-bg");
        } else {
            $(".navbar-bg-switch").removeClass("main-navigation-bg");
        }
		
        // 4. animate elements
        if ($(this).scrollTop() > 400) {
            $(".border-top").addClass("top-position-primary");
            $(".border-bottom").addClass("bottom-position-primary");
            $(".border-left").addClass("left-position-primary");
            $(".border-right").addClass("right-position-primary");
            $(".line-left").addClass("line-left-position-primary");
            $(".line-right").addClass("line-right-position-primary");
            $(".main-navigation-bg").addClass("main-navigation-bg-position-primary");
            $(".navbar-collapse").addClass("navbar-collapse-position-primary");
            $(".logo").addClass("logo-home-call");
            $(".main-navigation").addClass("main-navigation-home-call");
            $(".bottom-credits").addClass("bottom-credits-home-call");
            $(".social-icons-wrapper-share").addClass("social-icons-wrapper-share-home-call");
            $(".to-top-arrow").addClass("show");
        } else {
            $(".border-top").removeClass("top-position-primary");
            $(".border-bottom").removeClass("bottom-position-primary");
            $(".border-left").removeClass("left-position-primary");
            $(".border-right").removeClass("right-position-primary");
            $(".line-left").removeClass("line-left-position-primary");
            $(".line-right").removeClass("line-right-position-primary");
            $(".main-navigation-bg").removeClass("main-navigation-bg-position-primary");
            $(".navbar-collapse").removeClass("navbar-collapse-position-primary");
            $(".logo").removeClass("logo-home-call");
            $(".main-navigation").removeClass("main-navigation-home-call");
            $(".bottom-credits").removeClass("bottom-credits-home-call");
            $(".social-icons-wrapper-share").removeClass("social-icons-wrapper-share-home-call");
            $(".to-top-arrow").removeClass("show");
        }
		
        // 5. animate home title
        if ($(this).scrollTop() > 10) {
            $("h1.home-page-title").addClass("home-page-title-hide").removeClass("home-page-title-show");
        } else {
            $("h1.home-page-title").removeClass("home-page-title-hide").addClass("home-page-title-show");
        }
		
        // 6. hide elements
        if ($(window).width() < 640) {
            var scrollTop = $(window).scrollTop();
            var height = $(window).height();
            $(".bottom-credits").css({
                "opacity": ((height - scrollTop) / height)
            });
        }
    });
	
    // 7. social icons share
    $(".social-toggle-wrap").hover(function() {
        $(this).find(".social-widgets-wrap").stop().fadeIn("slow");
    }, function() {
        $(this).find(".social-widgets-wrap").stop().delay(50).fadeOut("slow");
    });
	
    // 8. facts counter
    $(".facts-counter-number").appear(function() {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });
	
    // 9. skills bar
    $(".show-skillbar").appear(function() {
        $(".skillbar").skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
            decimals: 0
        });
    });
	
    // 10. forms
    // 10.1. newsletter form
    $("form#subscribe").on("submit", function() {
        $("form#subscribe .subscribe-error").remove();
        var s = !1;
        if ($(".subscribe-requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
                    $(this).addClass("inputError"), s = !0;
                else if ($(this).hasClass("subscribe-email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'),
                        $(this).addClass("inputError"), s = !0);
                }
            }), !s) {
            $("form#subscribe input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#subscribe").slideUp("fast", function() {
                    $(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
                });
            });
        }
        return !1;
    });
    // 10.2. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
    // 11. contact modal
    $(".contact-modal-launcher, .contact-modal-closer").on("click", function() {
        if ($(".contact-modal").hasClass("open")) {
            $(".contact-modal").removeClass("open").addClass("close");
        } else {
            $(".contact-modal").removeClass("close").addClass("open");
        }
    });
    // 11.1. contact modal additional CLOSER
    $(".page-scroll").on("click", function() {
        $(".contact-modal").removeClass("open").addClass("close");
    });
	
    // 12. slick slider
    // 12.1. slick testimonials slideshow, slick fullscreen slideshow
    $(".testimonials-slideshow, .slick-fullscreen-slideshow").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	
    // 13. YouTube player
    $("#bgndVideo").YTPlayer();
    // 13.1. highlight YouTube player navigation
    $(".video-state").on("click", function() {
        $(".video-state").removeClass("active");
        $(this).addClass("active");
    });


});