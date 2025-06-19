// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

// Theme Toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
  toggleBtn.textContent = currentTheme === "dark" ? "🌙" : "☀️";
});

// Scroll to Top
const scrollBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) scrollBtn.style.display = "block";
  else scrollBtn.style.display = "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
