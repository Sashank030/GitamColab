function toggleDropdown() {
  var dropdown = document.getElementById("profile-dropdown");
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
    document.addEventListener("click", closeDropdownOutsideClick);
  } else {
    dropdown.style.display = "none";
    document.removeEventListener("click", closeDropdownOutsideClick); 
  }
}

function closeDropdownOutsideClick(event) {
  var dropdown = document.getElementById("profile-dropdown");
  if (!dropdown.contains(event.target) && event.target !== document.getElementById("profile")) {
    dropdown.style.display = "none";
    document.removeEventListener("click", closeDropdownOutsideClick); 
  }
}




document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  let currentIndex = 0;

  document.querySelector('.right-control').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  });

  document.querySelector('.left-control').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  function updateCarousel() {
    const translateValue = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + translateValue + ')';
    updatePreviewOpacity();
  }

  function updatePreviewOpacity() {
    slides.forEach((slide, index) => {
      const distance = Math.abs(currentIndex - index);
      const opacity = 1 - distance * 0.4;
      slide.style.opacity = opacity;
    });
  }
});