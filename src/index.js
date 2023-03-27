import './styles/main.scss'
import Swiper, { Navigation, Pagination } from 'swiper';



const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    lidesPerView: 1,
    direction: 'horizontal',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  });
  const swiper2 = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination-two',
    type: 'fraction'
  },
  });
  swiper.on('slideChange', function () {
    var activeIndex = swiper.activeIndex;
    swiper2.slideTo(activeIndex);
  });
  
  swiper2.on('slideChange', function () {
    var activeIndex = swiper2.activeIndex;
    swiper.slideTo(activeIndex);
  });

  const swiper_3 = new Swiper('.swiper2', {
    modules: [Navigation, Pagination],
    lidesPerView: 1,
    direction: 'horizontal',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  });