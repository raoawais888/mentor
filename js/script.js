var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    centerSlide: 'true',
    grabCursor: 'true',
    autoplayDisableOnInteraction: false,
    autoplay: {
      delay: 2000,
    },
   
    parallax: true,
    speed:800,
   
    navigation: {
      nextEl: ".swiper-button-nextt",
      prevEl: ".swiper-button-previ",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        850: {
          slidesPerView: 2,
      },
        992: {
            slidesPerView: 4,
        },
    },
  });
  var swiper = new Swiper(".slide-contentt", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    grabCursor: 'true',
    autoplayDisableOnInteraction: false,
    autoplay: {
      delay: 2000,
    },
   
    parallax: true,
    speed:800,
   
    navigation: {
      nextEl: ".swiper-button-nexttt",
      prevEl: ".swiper-button-previi",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        850: {
          slidesPerView: 2,
      },
        992: {
            slidesPerView: 4,
        },
    },
  });
 
  swiper.on('slideNextTransitionEnd',function(){
    if($("#slide-next-button").hasClass("swiper-button-disabled")){
        $("#slide-next-button").removeClass("swiper-button-disabled");
        $("#slide-next-button").attr("aria-disabled", "false");
    }
})


