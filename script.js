const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent successfully!");
  contactForm.reset();
});