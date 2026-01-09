"use strict";

const swiper = new Swiper(".swiper", {
  direction: "vertcal",
  loop: true,
  allowTouchMove: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  speed: 1000,
});

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-list li");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
// Close nav when clicking outside list items
document.addEventListener("click", (event) => {
  const isClickOnHamburger = hamburger.contains(event.target);
  const isClickOnNavItem = Array.from(navItems).some((item) =>
    item.contains(event.target)
  );

  if (!isClickOnHamburger && !isClickOnNavItem) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});
