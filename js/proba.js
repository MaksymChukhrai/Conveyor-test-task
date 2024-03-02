const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  const thumbsSwiper = new Swiper('.swiper-thumbs', {
    direction: 'horizontal',
    slidesPerView: 5, // Количество отображаемых превью
    spaceBetween: 10, // Промежуток между превью
    loop: true,
    slideToClickedSlide: true,
    navigation: {
        nextEl: '.swiper-thumb-next',
        prevEl: '.swiper-thumb-prev',
    },
});