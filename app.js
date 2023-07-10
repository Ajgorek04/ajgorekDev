// Pobierz wszystkie linki nawigacyjne
const navLinks = document.querySelectorAll('header ul a');

// Obsłuż kliknięcie na każdy link nawigacyjny
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Zatrzymaj domyślne zachowanie
    e.preventDefault();

    // Pobierz wartość atrybutu href
    const targetId = link.getAttribute('href').substring(1);

    // Przewiń do odpowiedniej sekcji
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
//

// Powrot na gore strony
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
  }
});

// Hamburger menu end