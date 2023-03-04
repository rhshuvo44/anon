"use strict";
// modal variables
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseoverlay = document.querySelector("[data-modal-overlay]");

// modal funcion
const modalCloseFunc = () => {
  modal.classList.add("closed");
};

// modal eventListener
modalCloseoverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

// notification toast variables
const notificationToast = document.querySelector("[data-toast]");
const toastCloseBtn = document.querySelector("[data-toast-close]");

// notification toast eventListener
toastCloseBtn.addEventListener("click", () => {
  notificationToast.classList.add("closed");
});

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]"
);
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]"
);
const overlay = document.querySelectorAll("[data-overlay]");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  // mobile menu fuction
  const mobileMenuCloseFunc = () => {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };
  mobileMenuOpenBtn[i].addEventListener("click", () => {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  });
  mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  overlay.addEventListener("click", mobileMenuCloseFunc);
}

// accordion variables
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");
// console.log(accordionBtn);

for (let i = 0; i < accordionBtn.length; i++) {
  console.log("inside");
  accordionBtn[i].addEventListener("click", () => {
    const clickedBtn = this.nextElementSibling.classList.contains("active");
    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;
      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }
    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}
