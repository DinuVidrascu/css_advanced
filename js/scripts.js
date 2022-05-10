tippy('.js-tooltip', {
  content: 'This is advanced CSS!',
});

tippy('.js-tooltip', {
  content: document.querySelector('.js-tooltip-menu'),
  allowHTML: true,
  interactive: true,
  trigger: 'click',
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});