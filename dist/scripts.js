const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu__link");

// TOGGLE NAV MENU AND MORPH HAMBURGER ICON

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("nav-toggle--open");
  navMenu.classList.toggle("nav-menu--open");
});

// CLOSE NAV MENU WHEN LINK IS CLICKED

navLinks.forEach(link => {
  link.addEventListener("click", (ev) => {
    navToggle.classList.remove("nav-toggle--open");
    navMenu.classList.remove("nav-menu--open");

    smoothScroll(ev.target.hash);
  });
});

// SMOOTH SCROLL

function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({ 
    behavior: 'smooth' 
  });
}
  
for (let link of navLinks) {
  link.addEventListener('click', (ev) => {
    ev.preventDefault();
    smoothScroll(ev.target.hash);
  });
}
