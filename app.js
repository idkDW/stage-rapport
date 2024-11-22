"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const weeks = document.querySelectorAll(".week__dates"); // Sélectionne toutes les semaines
  const days = document.querySelectorAll(".day-title"); // Sélectionne tous les jours

  // Cache toutes les semaines sauf les trois premières (1, 2, 3)
  weeks.forEach((week) => {
    if (
      !week.classList.contains("week__dates--week1") &&
      !week.classList.contains("week__dates--week2") &&
      !week.classList.contains("week__dates--week3")
    ) {
      week.classList.add("hidden");
    }
  });

  // Ajoute des événements pour afficher/masquer les jours d'une semaine
  weeks.forEach((week) => {
    const weekDateText = week.querySelectorAll(".week__date-text"); // Récupère toutes les dates
    weekDateText.forEach((dateText) => {
      dateText.addEventListener("click", () => {
        const details = dateText.nextElementSibling; // Trouve le contenu des détails
        if (details && details.classList.contains("week__details")) {
          details.classList.toggle("hidden");
        }
      });
    });
  });

  // Ajoute des événements pour afficher/masquer le contenu d'un jour
  days.forEach((day) => {
    day.addEventListener("click", () => {
      const targetClass = day.dataset.target; // Récupère la cible via data-target
      const targetContent = document.querySelector(
        `.day-content.${targetClass}`
      );
      if (targetContent) {
        targetContent.classList.toggle("hidden");
      }
    });
  });
});
