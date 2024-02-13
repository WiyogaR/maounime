// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika animemenu di klik
document.querySelector("#animemenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di uar sidebar untuk menghilangkan nav
const anime = document.querySelector("#animemenu");

document.addEventListener("click", function (e) {
  if (!anime.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
