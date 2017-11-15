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

function getElemY(elemID) {
    const elem = document.querySelector(elemID);
    const y = elem.offsetTop;
    const node = elem;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    }
    return y;
}


function smoothScroll(elemID) {
    const startY = window.pageYOffset;
    const stopY = getElemY(elemID);
    const distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY);
        return;
    }
    let speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    const step = Math.round(distance / 30);
    let leapY = stopY > startY ? startY + step : startY - step;
    let timer = 0;
    if (stopY > startY) {
        for (let i = startY; i < stopY; i += step) {
            setTimeout("window.scrollTo(0, "+ leapY +")", timer * speed);
            leapY += step;
            if (leapY > stopY) leapY = stopY;
            timer++;
        } return;
    }
    for (let i = startY; i > stopY; i -= step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY -= step;
        if (leapY < stopY) leapY = stopY;
        timer++;
    }
};
