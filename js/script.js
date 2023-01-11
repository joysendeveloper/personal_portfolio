console.clear();
// Adding Scroll Animation on Header
const header = document.querySelector("nav");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Scroll reveal JS plugin
const sr = ScrollReveal({
  distance: "20px",
  reset: true,
  duration: 1500,
});

sr.reveal(".home-text", { delay: 300, origin: "top" });
sr.reveal(".about, .service, .portfolio, .contact", {
  delay: 300,
  origin: "top",
});
sr.reveal(".skill", { delay: 100, duration: 1000 });

// Navigation Bar
let menuBtn = document.getElementById("menu-icon"),
  navbar = document.querySelector(".navbar");
console.log(navbar);

menuBtn.onclick = () => {
  navbar.classList.toggle("openNavBar");
};
window.onscroll = () => {
  navbar.classList.remove("openNavBar");
};

// Theme Changing Script
const body = document.querySelector("body"),
  colorChangeBtn = document.querySelector("#ColorChangeBtn"),
  colorPalette = document.querySelector(".color-palette");

// Color change btn clicked
ColorChangeBtn.onclick = () => {
  colorPalette.classList.toggle("display-grid");
};

// Change Color Accroding Button Clicked
let colorIcons = document.querySelectorAll(".color-icons");
colorIcons.forEach((color) => {
  color.addEventListener("click", () => {
    // Getting Value Form Attribute
    let value = color.getAttribute("value");
    // Adding the name of the class accroding to the selected Color
    body.className = value;
    // Removing the Color Palette whwn clicked a color
    colorPalette.classList.toggle("display-grid");
    console.log(value);
  });
});

// First Code Of Color Change

// let blue = document.querySelector(".blue"),
//   main = document.querySelector(".main"),
//   violet = document.querySelector(".violet"),
//   pinksh = document.querySelector(".pinksh");
// blue.onclick = () => {
//   body.className = "blue";
// };
// main.onclick = () => {
//   body.className = "main";
// };
// violet.onclick = () => {
//   body.className = "violet";
// };
// pinksh.onclick = () => {
//   body.className = "pinksh";
// };
