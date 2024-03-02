// js\slider.js

document.addEventListener('DOMContentLoaded', function () {
  // Инициализируем основной слайдер
  const swiperMain = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: null, // Отключаем стрелку вперед
          prevEl: null, // Отключаем стрелку назад
        },
      },

      // when window width is >= 1200px
      1200: {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next', // Показываем стрелку вперед
          prevEl: '.swiper-button-prev', // Показываем стрелку назад
        },
      }
    }
  });

  // Получаем слайдер превью
  const swiperThumbs = new Swiper('.swiper-thumbs', {
    slidesPerView: 5,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  // Связываем основной слайдер с превью
  swiperMain.controller.control = swiperThumbs;
  swiperThumbs.controller.control = swiperMain;

  // Добавляем обработчик события изменения слайда в основном слайдере
  swiperMain.on('slideChange', function () {
    // Удаляем класс active у всех элементов превью
    const thumbs = document.querySelectorAll('.swiper-thumb');
    thumbs.forEach(thumb => {
      thumb.classList.remove('active');
    });

    // Получаем индекс активного слайда в основном слайдере
    const activeIndex = swiperMain.realIndex;

    // Добавляем класс active элементу превью с соответствующим индексом
    thumbs[activeIndex].classList.add('active');
  });

  // Добавляем обработчик клика на превью слайдов
  swiperThumbs.on('click', function () {
    // Получаем индекс кликнутого превью
    const thumbIndex = swiperThumbs.clickedIndex;

    // Переходим к соответствующему слайду в основном слайдере
    swiperMain.slideTo(thumbIndex);
  });
});
