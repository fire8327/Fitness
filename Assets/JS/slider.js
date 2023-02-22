const swiper = new Swiper('.galery-1', {
    // Optional parameters
    rewind: true,

    // Navigation arrows
    navigation: {
      nextEl: '.next-galery1',
      prevEl: '.prev-galery1',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.5,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
  });
const swiper2 = new Swiper('.galery-2', {
    // Optional parameters
    rewind: true,

    // Navigation arrows
    navigation: {
      nextEl: '.next-galery2',
      prevEl: '.prev-galery2',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.3,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
  });