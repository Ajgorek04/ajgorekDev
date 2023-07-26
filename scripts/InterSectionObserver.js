// SECTION ABOUT ME
// Width > 1200
const aboutme_header = document.querySelector(".aboutme_header");
const me_info = document.querySelector(".me_info");
const technologies_info = document.querySelector(".technologies_info");
const goDownA = document.querySelector(".goDown a");
// Width <= 1200
//

function addOffAnimClass(target) {
  target.classList.add("offAnim");
}

function removeOffAnimClass(target) {
  target.classList.remove("offAnim");
}

// Observer for width > 1200
if (windowWidth > 1200) {
  aboutMeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 1 / 4) {
          // Adjust the threshold here /\
          // Dostosuj wartość progu tutaj /\
          addOffAnimClass(aboutme_header);
          addOffAnimClass(me_info);
          addOffAnimClass(technologies_info);
          setTimeout(addOffAnimClass(goDown), 250);
        } else {
          removeOffAnimClass(aboutme_header);
          removeOffAnimClass(me_info);
          removeOffAnimClass(technologies_info);
          removeOffAnimClass(goDown);
        }
      });
    },
    {
      threshold: 1 / 4, // Set the threshold to 1/4
      // Ustaw próg na 1/4
    }
  );
  const infoDiv = document.querySelectorAll(".aboutme").forEach((item) => {
    if (windowWidth > 1200) {
      aboutMeObserver.observe(item);
    }
  });
}
// Observer for width <= 1200
else if (windowWidth <= 1200) {
  // DIV ME
  aboutMeObserverME = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 1 / 4) {
          addOffAnimClass(aboutme_header);
          addOffAnimClass(me_info);
        } else {
          removeOffAnimClass(aboutme_header);
          removeOffAnimClass(me_info);
        }
      });
    },
    {
      threshold: 1 / 4,
    }
  );
  const me = document.querySelectorAll(".me").forEach((item) => {
    if (windowWidth <= 1200) {
      aboutMeObserverME.observe(item);
    }
  });
  // DIV TECHNOLOGIES
  aboutMeObserverTechnologies = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 1 / 4) {
          addOffAnimClass(technologies_info);
        } else {
          removeOffAnimClass(technologies_info);
        }
      });
    },
    {
      threshold: 1 / 4,
    }
  );
  const technologies = document
    .querySelectorAll(".technologies")
    .forEach((item) => {
      if (windowWidth <= 1200) {
        aboutMeObserverTechnologies.observe(item);
      }
    });
  // DIV goDown
  aboutMeObserverGoDown = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 1 / 4) {
          addOffAnimClass(goDownA);
          console.log("wiem");
        } else {
          removeOffAnimClass(goDownA);
        }
      });
    },
    {
      threshold: 1 / 4,
    }
  );
  const goDown = document.querySelectorAll(".goDown").forEach((item) => {
    if (windowWidth <= 1200) {
      aboutMeObserverGoDown.observe(item);
    }
  });
}

// END SECTION ABOUT ME
