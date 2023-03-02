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
