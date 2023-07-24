// Powrot na gore strony po f5
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

//

// section projects - slider - usuwanie strzalek przy width < 1200 px | 75 rem

const sliderNext = document.querySelector(".swiper-button-next");
const sliderPrev = document.querySelector(".swiper-button-prev");
const windowWidth = window.innerWidth;

if (windowWidth <= 1200) {
  sliderNext.remove();
  sliderPrev.remove();
}
