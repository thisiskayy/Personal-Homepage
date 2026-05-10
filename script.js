console.log("Kairos Portfolio berjalan!");

// Scroll animation
function checkScroll() {
  const hiddenElements = document.querySelectorAll('.hidden, .hidden-left, .hidden-right');
  
  hiddenElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight - 100 && rect.bottom > 100;

    if (inView) {
      if (el.classList.contains('hidden-left')) {
        el.classList.add('show-left');
      } else if (el.classList.contains('hidden-right')) {
        el.classList.add('show-right');
      } else {
        el.classList.add('show');
      }
    } else {
      el.classList.remove('show', 'show-left', 'show-right');
    }
  });
}

// Jalankan saat scroll & load
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Gallery animation (muncul bertahap)
document.addEventListener("DOMContentLoaded", () => {
  const hiddenElements = document.querySelectorAll(".gallery .hidden");

  hiddenElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 400); // jeda 0.4 detik antar foto
  });
});

document.getElementById("showGallery").addEventListener("click", function() {
  document.querySelector(".caption").classList.add("show");
  document.querySelector(".gallery").classList.add("show");
});