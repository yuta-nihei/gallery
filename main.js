$(function() {
    // Menu
    $('.hamburger').on('click', function() {
        hamburger();
    })

    $('#navi a').on('click', function() {
        hamburger();
    })

    // Fade In Out
    $('.inview').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).stop().addClass('show');
        }
    })

    // mainvisual animation
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();

        // mainvisual scale
        mv_scale(scroll);

        if (scroll > 520) {
            $('.logo').fadeIn(500);
            $('.hamburger').fadeIn(500);
        } else {
            $('.logo').fadeOut(500);
            $('.hamburger').fadeOut(500);
        }

        let access_position = $('#access').offset().top - $(window).height();
        let contact_position = $('#contact').offset().top - $(window).height();

        if(scroll > access_position) {
            if(scroll < contact_position) {
                $('.bg').fadeIn(500);
            } else {
                $('.bg').fadeOut(500);
            }
        } else {
            $('.bg').fadeOut(500);
        }
    });
    // Resize
    $(window).on('load resize', function() {
        let scroll = $(window).scrollTop();

        mv_scale(scroll);
    });
});

// hamburger menu
function hamburger() {
    $('.hamburger').toggleClass('active');

    if ($('.hamburger').hasClass('active')) {
        $('#navi').addClass('active');
    } else {
        $('#navi').removeClass('active');
    }
}

function mv_scale(scroll) {
    if (window.innerWidth > 900) {
        $('#mainvisual img').css({
            'width': 100/3 + scroll/10 + '%'
        });
    } else {
        $('#mainvisual img').css({
            'width': 100 - scroll/10 + '%'
        });
    }
}