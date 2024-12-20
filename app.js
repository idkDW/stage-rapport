"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const weeks = document.querySelectorAll(".week__dates");
  const days = document.querySelectorAll(".day-title");

  weeks.forEach((week) => {
    if (
      !week.classList.contains("week__dates--week1") &&
      !week.classList.contains("week__dates--week2") &&
      !week.classList.contains("week__dates--week3") &&
      !week.classList.contains("week__dates--week4") &&
      !week.classList.contains("week__dates--week5") &&
      !week.classList.contains("week__dates--week6") &&
      !week.classList.contains("week__dates--week7")
    ) {
      week.classList.add("hidden");
    }
  });

  weeks.forEach((week) => {
    const weekDateText = week.querySelectorAll(".week__date-text");
    weekDateText.forEach((dateText) => {
      dateText.addEventListener("click", () => {
        const details = dateText.nextElementSibling;
        if (details && details.classList.contains("week__details")) {
          details.classList.toggle("hidden");
        }
      });
    });
  });

  days.forEach((day) => {
    day.addEventListener("click", () => {
      const targetClass = day.dataset.target;
      const targetContent = document.querySelector(
        `.day-content.${targetClass}`
      );
      if (targetContent) {
        targetContent.classList.toggle("hidden");
      }
    });
  });
});
