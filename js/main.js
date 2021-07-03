// Preloader start
window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    // removing arrow function
    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    },2000)
})
// Preloader end
$(document).ready(function(){
// fixed header start
$(window).scroll(function(){
    if($(this).scrollTop() > 200){
            $(".header").addClass("fixed");
    }
    else{
        $(".header").removeClass("fixed");
    }
})
// fixed header end
// nav toggle start
$(".nav-toggler").click(function(){
    $(".header .nav").slideToggle();
    $(".nav-toggler").toggleClass("open");
});
$(".header .nav a").click(function(){
    if($(window).width() < 768){
        $(".header .nav").slideToggle();
        $(".nav-toggler").toggleClass("open");
    }
})
// nav toggle end

// mix it up js start
var mixer = mixitup('.portfolio');
// mix it up js end

// Magnific popup js start
$('.portfolio').magnificPopup({
    type:'image',
    delegate: 'a',
    gallery:{
        enabled:true
    }
});
// Magnific popup js end
// owl carousel js start
$('.testimonial').owlCarousel({
    nav: true,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
// owl carousel js end

// scroll it js start
$.scrollIt({
    scrollTime: 1000,
});
// scroll it js end
});
