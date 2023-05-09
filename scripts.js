const header = document.getElementById("header");

const bugerMenu = document.getElementById("menu-icon");
const navlist = document.querySelector(".header__nav");

window.addEventListener("scroll", () => {
  //añade la clase "sticky" cuando baja de 100px
  header.classList.toggle("sticky", window.scrollY > 100);
});

bugerMenu.onclick = () => {
  bugerMenu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
  header.classList.toggle("header-open");
};

// cuando demos click a alguna opcion del menu
// y hagamos scroll se quite
window.onscroll = () => {
  bugerMenu.classList.remove("bx-x");
  navlist.classList.remove("open");
  header.classList.remove("header-open");
};
