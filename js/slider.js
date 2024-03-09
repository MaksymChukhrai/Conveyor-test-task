document.addEventListener("DOMContentLoaded", function () {
  // Initialise the main slider
  const swiperMain = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
      delay: 2000,
      // Delay between slides in milliseconds (in this case 5 seconds)
      disableOnInteraction: false // Disable autoscrolling when user interacts with the slider
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    speed: 1000,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
          nextEl: "swiper-button-disabled",
          prevEl: "swiper-button-disabled"
        }
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    }
  });
});