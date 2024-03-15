// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
// While click hamburger menu
document.querySelector("#hamburger-menu").onclick = (event) => {
  event.preventDefault();
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
