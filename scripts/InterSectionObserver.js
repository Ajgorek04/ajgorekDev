const wiem = document.querySelectorAll(".anim");

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      // Forwards - wlasciwosc animation-fill-mode sprawia ze element zachowa stan animacji
      entry.target.style.animation = "anim1 1s forwards ease-out";
    } else {
      entry.target.style.animation = "none";
    }
  });
});

wiem.forEach((item) => {
  observer.observe(item);
});
