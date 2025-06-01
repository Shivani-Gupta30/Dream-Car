// Show a greeting when the page loads
document.addEventListener('DOMContentLoaded', () => {
  console.log("Welcome to Dream Car!");
  alert("Welcome to Dream Car - Find Your Dream Ride Today!");
});

// WhatsApp button click tracking
const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
whatsappLinks.forEach(link => {
  link.addEventListener('click', () => {
    console.log("WhatsApp link clicked!");
  });
});

// Optional: Smooth scroll for nav links (if links are anchored)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Optional: Detect when the carousel changes slides
const carousel = document.querySelector('#carouselExampleCaptions');
if (carousel) {
  carousel.addEventListener('slid.bs.carousel', function () {
    console.log("Carousel slide changed!");
  });
}
