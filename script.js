
// Mobile Navigation Toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('active');
});

// Lightbox Functionality
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.querySelector('#lightbox');
const lightboxImg = document.querySelector('#lightbox-img');
const closeLightbox = document.querySelector('#close-lightbox');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

closeLightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
