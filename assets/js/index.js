// Acitve Navbar item
var navItems = document.querySelectorAll(".header__navbar-item");
for( let navItem of navItems) {
    navItem.onclick = function() {
        
        var activeNav = document.querySelector(".header__navbar-item--active");
        activeNav.classList.remove("header__navbar-item--active")
        this.classList.add("header__navbar-item--active")
    }
}

// Menu button for tablet and mobile






// Subnav Slider
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
            items:3
        },
        600:{
            items:5
        },
        1000:{
            items:5
        }
    }
})


// Main Slider
$('.main-slider-owl').owlCarousel({
    loop:true,
    rewind: true,
    items: 3,
    singleItem: true,
    margin:10,
    navSpeed: 1000,
    nav: true,
    responsiveClass:true,
    navText: ['<i class="fas fa-arrow-circle-left"></i>', '<i class="fas fa-arrow-circle-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav: true
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})



// Main slider navbutton transition
var navPrev = document.querySelector('.main-slider-owl .owl-prev');
var navNext = document.querySelector('.main-slider-owl .owl-next');
var mainSlider = document.querySelector('.main-slider');
mainSlider.onmouseover = function() {
    Object.assign(navPrev.style,{opacity:"1",visibility:"visible",left:"36%"});
    Object.assign(navNext.style,{opacity:"1",visibility:"visible",right:"36%"});
}

mainSlider.onmouseout = function() {
    Object.assign(navPrev.style,{opacity:"0",visibility:"hidden",left:"38%"});
    Object.assign(navNext.style,{opacity:"0",visibility:"hidden",right:"38%"});
}



// Scroll to top 
var scrollBtn = document.querySelector('.scroll-top')
// console.log(scrollBtn)

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
    scrollBtn.style.opacity = "1";
    scrollBtn.style.visibility = "visible";
  } else {
    scrollBtn.style.opacity = "0";
    scrollBtn.style.visibility = "hidden";
  }
}

// When the user clicks on the button, scroll to the top of the document
scrollBtn.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

