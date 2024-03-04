document.addEventListener('DOMContentLoaded', function () {
// Initialise the main slider
  const swiperMain = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //     hide: true, // Скрыть скроллбар
  // },
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    autoplay: {
      delay: 2000, // Delay between slides in milliseconds (in this case 5 seconds)
      disableOnInteraction: false, // Disable autoscrolling when user interacts with the slider
    },
    speed: 1000,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }
  });
});
