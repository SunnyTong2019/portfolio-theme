const navButton = document.querySelector(".nav-button");
const navContent = document.querySelector(".nav-content");
const navBranding = document.querySelector(".nav-branding");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-item");

navButton.addEventListener("click", toggleDisplay);

let isShow = false;

function toggleDisplay() {
  if (isShow) {
    navButton.classList.remove("close");
    navContent.classList.remove("show");
    navBranding.classList.remove("show");
    navMenu.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    isShow = false;
  } else {
    navButton.classList.add("close");
    navContent.classList.add("show");
    navBranding.classList.add("show");
    navMenu.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    isShow = true;
  }
}
