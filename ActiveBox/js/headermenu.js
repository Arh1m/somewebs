$(function () {

    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    $(window).on("scroll load resize", function () {
        introH = intro.height();
        scrollPos = $(this).scrollTop();

        if( scrollPos >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let blockId = $(this).data('scroll');
        let blockOffset = $(blockId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: blockOffset - 100,
        }, 700);
    });


    /* navToggle */
    navToggle.on("click", function(event) {
       event.preventDefault();

        nav.toggleClass("show");
    });


});