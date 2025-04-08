// Loader Display
window.addEventListener('load', function () {
  const loader = document.querySelector('.loader-wrapper');
  loader.style.display = 'none'; // hide loader after page is fully loaded
});

// Dark/Matrix Theme Toggle
const body = document.body;
const themeButton = document.querySelector('.theme-toggle');

themeButton.addEventListener('click', function() {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('matrix');
  } else if (body.classList.contains('matrix')) {
    body.classList.remove('matrix');
  } else {
    body.classList.add('dark');
  }
});

// Contact Form Submission (without email service)
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.");
  document.getElementById('contact-form').reset(); // Reset form after submit
});
