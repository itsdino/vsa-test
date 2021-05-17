const header = document.querySelector(".header-wrapper");

// initializes lax
window.onload = () => {
  lax.setup();
  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };
  window.requestAnimationFrame(updateLax);
  header.classList.add('loaded');
};

// scroll to top button (to be implemented)
// const scrollTopBtn = document.getElementById("back-to-top");
// const footer = document.getElementById("main-footer");

// for mobile navbar
const navBarConst = document.getElementById("navbar");
const menuItemsConst = document.querySelectorAll(".menu-item");
const menuBtnConst = document.getElementById("menu-btn");
const hamburgerMenuIcon = document.querySelector(".menu-icon");
const hamburgerDropdownFix = document.querySelector(".navigation li:first-child");

// for desktop navbar
const logoConst = document.querySelector(".logo");
const menuWrapperConst = document.querySelector("#navbar ul");
const menuLinksConst = document.querySelectorAll("#navbar ul li a");
let menuLinksLength = menuLinksConst.length;

// scroll to top button show/hide
const scrollToTopButtonHandler = () => {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 1000) {
    scrollTopBtn.classList.remove("hidden");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
};

// mobile
// ------

// closes mobile menu on item select
for (let i = 0; i < menuItemsConst.length; i++) {
  menuItemsConst[i].addEventListener("click", () => {
    setTimeout(uncheckHamburger, 150);
  });
}

const uncheckHamburger = () => {
  menuBtnConst.checked = false;
};

// desktop
// -------

// runs functions on scroll
window.onscroll = () => {
  navBarSizeHandler();
};

let scrolled = false;
const navBarSizeHandler = () => {
  if (window.scrollY > 90) {
    if (!scrolled) {
      shrinkNavbar();
      scrolled = true;
    }
  } else if (scrolled) {
    heroNavbar();
    scrolled = false;
  }
};

// shrinks navbar
const shrinkNavbar = () => {
  navBarConst.classList.remove("top");
  menuWrapperConst.classList.add("shrinked");
  logoConst.classList.add("shrinked");
  hamburgerMenuIcon.classList.add("shrinked");
  hamburgerDropdownFix.classList.add("shrinked");
  for (let i = 0; i < menuLinksLength; i++) {
    menuLinksConst[i].classList.add("shrinked");
  }
};

// resets back to hero navbar
const heroNavbar = () => {
  navBarConst.classList.add("top");
  menuWrapperConst.classList.remove("shrinked");
  logoConst.classList.remove("shrinked");
  hamburgerMenuIcon.classList.remove("shrinked");
  hamburgerDropdownFix.classList.remove("shrinked");
  for (let i = 0; i < menuLinksLength; i++) {
    menuLinksConst[i].classList.remove("shrinked");
  }
};

//


// gallery calls
for (let i=1; i <= 8; i++) {
  lightGallery(document.getElementById('gallery-' + i), {
    startClass: 'lg-start-fade',
    mode: 'lg-fade',
    preload: 2,
    enableDrag: false,
    enableSwipe: false,
    backdropDuration: 300,
    mousewheel: false,
    download: false
  });
}

// jQuery smooth scroll to element
$("#navbar ul li a, .site-link").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 48,
      },
      450
    );
  }
});

//



