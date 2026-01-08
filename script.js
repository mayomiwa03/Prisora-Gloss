const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  speed: 1000,
});
