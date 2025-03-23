const navOpen = document.querySelector(".mobileNavigation .open");
const navClose = document.querySelector(".mobileNavigation .close");
const navMenu = document.querySelector(".nav-list");

navOpen.addEventListener("click", () => {
  navMenu.classList.remove("transform-nav");
  navOpen.style.display = "none";
  navClose.style.display = "inline-block";
});

navClose.addEventListener("click", () => {
  navMenu.classList.add("transform-nav");
  navClose.style.display = "none";
  navOpen.style.display = "inline-block";
});
