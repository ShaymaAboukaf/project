$('.owl-carousel').owlCarousel({
    items: 2,
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    smartSpeed: 500,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})



