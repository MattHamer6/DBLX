jQuery(function ($) {

    // Slide out navigation menu
    anime({
        targets: '.slide-menu .slide-menu-items ul li',
        translateX: -200,
        opacity: 1,
        duration: 1250,
        delay: anime.stagger(125),
        easing: 'easeInOutBack'
    });
    $('.slide-menu-toggle').click(function () {
        $('.slide-menu').toggleClass('active');
        if ($('.slide-menu').hasClass('active')) {
            anime({
                targets: '.slide-menu .slide-menu-items ul li',
                translateX: 0,
                opacity: 1,
                duration: 1000,
                delay: anime.stagger(125),
                easing: 'easeInOutBack'
            });
        } else {
            anime({
                targets: '.slide-menu .slide-menu-items ul li',
                translateX: -200,
                opacity: 1,
                duration: 1000,
                delay: anime.stagger(125),
                easing: 'easeInOutBack'
            });
        }
    });

    // Landing Page Large Text
    $('.landing-page').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animate');

            if ( $(this).hasClass('animate') ) {
                // Large Words
                anime({
                    targets: '.animate .large-words .one',
                    translateX: -75,
                    duration: 1000,
                    easing: 'linear'
                });
                anime({
                    targets: '.animate .large-words .two',
                    translateX: 550,
                    duration: 1500,
                    easing: 'linear'
                });
                // Text Box
                if($(window).width() < 768) {
                    anime({
                        targets: '.animate .main-content .numbers, .animate .main-content .title h1, .animate .main-content .title p, .animate .main-content .button-wrapper',
                        opacity: 1,
                        duration: 1500,
                        delay: anime.stagger(250),
                        easing: 'easeInOutBack',
                        translateX: 75,
                    });
                }
                if($(window).width() >= 768) {
                    anime({
                        targets: '.animate .main-content .numbers, .animate .main-content .title h1, .animate .main-content .title p, .animate .main-content .button-wrapper',
                        opacity: 1,
                        duration: 1500,
                        delay: anime.stagger(250),
                        easing: 'easeInOutBack',
                        translateX: 150,
                    });
                }
                if($(window).width() >= 1920) {
                    anime({
                        targets: '.animate .main-content .numbers, .animate .main-content .title h1, .animate .main-content .title p, .animate .main-content .button-wrapper',
                        opacity: 1,
                        duration: 1500,
                        delay: anime.stagger(250),
                        easing: 'easeInOutBack',
                        translateX: 250,
                    });
                }
            }
        } else {
            $('.landing-page').removeClass('animate');
        }
    });

    // Smooth Scroll to Anchor
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1500);
    });

    // Scrollify Auto Scroll 
    $(function() {
        $.scrollify({
        section : "main > section",
        sectionName : "section",
        scrollSpeed: 1500,
        touchScroll:false,
        setHeights: false,
        afterResize: function() {
            if( $(window).width() < 1200) {
            $.scrollify.disable()
            }else{
            $.scrollify.enable()
            }
        },
        });
    });

    // Text Box Animation
    // Landing Page Large Text
    $('.landing-page').on('inview', function(event, isInView) {
        if ( $(this).hasClass('animate') ) {

            $(window).resize(function() {
                if($(window).width() < 768) {
                    anime({
                        targets: '.animate .main-content .numbers, .animate .main-content .title h1, .animate .main-content .title p, .animate .main-content .button-wrapper',
                        opacity: 1,
                        duration: 1500,
                        delay: anime.stagger(250),
                        easing: 'easeInOutBack',
                        translateX: 75,
                    });
                }
                if($(window).width() >= 768) {
                    anime({
                        targets: '.animate .main-content .numbers, .animate .main-content .title h1, .animate .main-content .title p, .animate .main-content .button-wrapper',
                        opacity: 1,
                        duration: 1500,
                        delay: anime.stagger(250),
                        easing: 'easeInOutBack',
                        translateX: 150,
                    });
                }
                if($(window).width() >= 1920) {
                    anime({
                        targets: '.animate .main-content .numbers, .animate .main-content .title h1, .animate .main-content .title p, .animate .main-content .button-wrapper',
                        opacity: 1,
                        duration: 1500,
                        delay: anime.stagger(250),
                        easing: 'easeInOutBack',
                        translateX: 250,
                    });
                }
            });
        }
    });
  // jQuery End
});