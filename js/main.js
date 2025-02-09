(function ($) {
    "use strict";

    // ------- Prealoder ------
    $(window).on('load', function () {
        $("#preloader").delay(300).fadeOut("slow");
    });

    // back-to-top
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').addClass("topbtn_hide");
        } else {
            $('.back-to-top').removeClass("topbtn_hide");
        }
    });
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    $(document).ready(function () {

        // site_header
        $(document).ready(function () {
            function toggleSticky() {
                if ($(window).scrollTop() > 100) {
                    $(".site_header").addClass("sticky");
                } else {
                    $(".site_header").removeClass("sticky");
                }
            }
        
            toggleSticky(); // Check on page load
            $(window).on("scroll", toggleSticky); // Check on scroll
        });

        // hamburger_btn
        $('.hamburger_btn svg').on('click', function () {
            $('body').toggleClass('menu_toggled overflow-hidden');
        });

        // cookies_btn
        $('.cookies_btn').click(function (e) {
            $(this).closest(".cookies").hide();
        });

        // search_toggle
        $('.search_toggle').click(function (e) {
            $(this).closest(".search_area").toggleClass('active');
        });

        // overons_slider
        $('.article_slider').owlCarousel({
            loop: true,
            margin: 85,
            autoplay: false,
            nav: true,
            dots: true,
            navText: [
                '<img src="img/arrow_left.svg" class="custom_prev" alt="arrow">',
                '<img src="img/arrow_right.svg" class="custom_next" alt="arrow">'
            ],
            responsive: {
                0: { items: 1 },
                576: { items: 1 },
                768: { items: 2 },
                992: { items: 4 }
            }
        });


    });

})(jQuery);