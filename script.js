// Loader
window.addEventListener("load", () => {
  document.querySelector(".loader-wrapper").style.display = "none";
});

// Parallax effect
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});

// Dark Mode
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Matrix Mode
document.getElementById("matrixBtn").addEventListener("click", () => {
  document.body.classList.toggle("matrix");
});

// Simulasi pengiriman form (tanpa backend)
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Pesanmu berhasil dikirim (ke luar angkasa) 🚀");
  this.reset();
});

// AOS Init
AOS.init();
