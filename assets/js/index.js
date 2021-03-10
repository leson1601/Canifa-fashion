$('.subnav-slider-owl.owl-carousel').owlCarousel({
    loop:false,
    rewind: true,
    items: 5,
    margin:0,
    dots: true,
    nav:false,
    // navText : ['<i class="fas fa-arrow-circle-left"></i>','<i class="fas fa-arrow-circle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})