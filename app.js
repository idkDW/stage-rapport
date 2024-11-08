"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const dateText = document.querySelector(".week__date-text");
  const detailsSection = document.querySelector(".week__details");

  dateText.addEventListener("click", function () {
    detailsSection.classList.toggle("hidden");
  });
});
