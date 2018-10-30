/************************************************************
                          SERVICE
 ************************************************************/

$(function () {

    new WOW().init();

});
/************************************************************
                          WORK
 ************************************************************/
$(function () {
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/************************************************************
                          TEAM--owl-carousel
 ************************************************************/
$(document).ready(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            //breaKpoint from 768 up
            0: {
                items: 1
            },
            //breaKpoint from 480 up
            480: {
                items: 2
            },
            //breaKpoint from 768 up
            768: {
                items: 3
            }
        }
    });
});

/************************************************************
                          testimonials--owl-carousel
 ************************************************************/
$(document).ready(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true
    });
});


/************************************************************
                        STATS  counter-up
 ************************************************************/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
});

/************************************************************
                          CLIENTS--owl-carousel
 ************************************************************/
$(document).ready(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        responsive: {
            //breaKpoint from 768 up
            0: {
                items: 1
            },
            //breaKpoint from 480 up
            480: {
                items: 3
            },
            //breaKpoint from 768 up
            768: {
                items: 5
            },
            992: {
                items: 6
            }
        }
    });
});

/************************************************************
                          NAVIGATION
 ************************************************************/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});
/************************************************************
                          smooth scrolling
 ************************************************************/
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");

    });
});

//close mobile menu on click
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});