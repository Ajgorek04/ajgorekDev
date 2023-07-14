// Powrot na gore strony po f5
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
//

// Zmiana kolorów strony
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');

sun.addEventListener('click', () => {
  moon.style.display = 'block';
  sun.style.display = 'none';
});

moon.addEventListener('click', () => {
  sun.style.display = 'block';
  moon.style.display = 'none';
});
//

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const spanElements = document.querySelectorAll('header.contentHeader span');
const arrowdown = document.querySelector('.arrowdown');


hamburger.onclick = function() {
  menu.classList.toggle("open-menu");

  spanElements.forEach(span => {
    span.classList.toggle('span-hider');
  });

  arrowdown.classList.toggle('arrow-hider');
  
};

// Chowanie po nacisnieciu na jakis link
const menuLink = document.querySelectorAll('.menu-link')

menuLink.forEach(link => {
  link.onclick = function() {
    menu.classList.remove("open-menu");
    
    spanElements.forEach(span => {
      span.classList.toggle('span-hider');
    });

    arrowdown.classList.toggle('arrow-hider');

  }
});

// Hamburger menu end


// Section about me
const aboutmeHeader = document.querySelector('.aboutme_header');
const aboutmeHeaderPosition  = aboutmeHeader.getBoundingClientRect().top; //odleglosc elementu od gornej krawedzi strony

const aboutmeHeaderH1 = document.querySelector('.aboutme_header_h1');

window.addEventListener('scroll', () => {
  const windowScrollY = window.scrollY

  if(windowScrollY >= 100){
    aboutmeHeaderH1.classList.add('aboutmeWiem');
  } else {
    aboutmeHeaderH1.classList.remove('aboutmeWiem')
  }

})