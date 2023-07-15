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

hamburger.onclick = function() {
  menu.classList.toggle("open-menu");
};

// Chowanie po nacisnieciu na jakis link
const menuLink = document.querySelectorAll('.menu-link')

menuLink.forEach(link => {
  link.onclick = function() {
    menu.classList.remove("open-menu");
  }
});

// Hamburger menu end




// Animacja wlatywania

// Section about me
const aboutmeHeader = document.querySelector('.aboutme_header');
const aboutmeHeaderPosition  = aboutmeHeader.getBoundingClientRect().top; //odleglosc elementu od gornej krawedzi strony

const aboutmeHeaderH1 = document.querySelector('.aboutme_header_h1');

const me_info = document.querySelector('.me_info');
const technologies_info = document.querySelector('.technologies_info');
const goDownI = document.querySelector('#goDownI');

window.addEventListener('scroll', () => {
  const windowScrollY = window.scrollY

  if(windowScrollY >= 100){
    aboutmeHeaderH1.classList.add('aboutmeScrollY');
  } else {
    aboutmeHeaderH1.classList.remove('aboutmeScrollY')
  }

  
if(windowScrollY >= 250) {
  me_info.style.opacity = '1';
  me_info.style.transform = 'translateX(0)';

  
  technologies_info.style.opacity = '1';
  technologies_info.style.transform = 'translateX(0)';
    
  goDownI.style.transform = 'translateY(0)'
  goDownI.style.opacity = '1'
} else {
  me_info.style.opacity = '0';
  me_info.style.transform = 'translateX(-100rem)';

  technologies_info.style.opacity = '0';
  technologies_info.style.transform = 'translateX(100rem)';

  goDownI.style.transform = 'translateY(100rem)'
  goDownI.style.opacity = '1'
}

})

// koniec sekcji aboutme