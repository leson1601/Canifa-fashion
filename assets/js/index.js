// Acitve Navbar item
var navItems = document.querySelectorAll(".header__navbar-item");
for( let navItem of navItems) {
    navItem.onclick = function() {
        
        var activeNav = document.querySelector(".header__navbar-item--active");
        activeNav.classList.remove("header__navbar-item--active")
        this.classList.add("header__navbar-item--active")
    }
}







// Slider
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