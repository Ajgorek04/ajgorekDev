function addOffAnimClass(target) {
  target.classList.add("offAnim");
}

function removeOffAnimClass(target) {
  target.classList.remove("offAnim");
}

// SECTION ABOUT ME

const aboutme_header = document.querySelector(".aboutme_header");
const me_info = document.querySelector(".me_info");
const technologies_info = document.querySelector(".technologies_info");
const goDownA = document.querySelector(".goDown a");

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
          setTimeout(addOffAnimClass(goDownA), 1000);
        } else {
          removeOffAnimClass(aboutme_header);
          removeOffAnimClass(me_info);
          removeOffAnimClass(technologies_info);
          removeOffAnimClass(goDownA);
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
} else if (windowWidth <= 1200) {
  // Observer for width <= 1200

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
    aboutMeObserverME.observe(item);
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
      aboutMeObserverTechnologies.observe(item);
    });

  aboutMeObserverGoDown = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        addOffAnimClass(goDownA);
      } else {
        removeOffAnimClass(goDownA);
      }
    });
  });
  const goDown = document.querySelectorAll(".goDown").forEach((item) => {
    aboutMeObserverGoDown.observe(item);
  });
}

// END SECTION ABOUT ME

// SECTION PROJECTS

const projects_header = document.querySelector(".projects_header");
const sswiper = document.querySelector(".swiper");
const moreprojects = document.querySelector(".moreprojects");

observerProjectsText = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      addOffAnimClass(projects_header);
    } else {
      removeOffAnimClass(projects_header);
    }
  });
});

const projects = document
  .querySelectorAll(".projects")
  .forEach((item) => observerProjectsText.observe(item));

observerProjectsSwiper = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 1 / 2) {
        addOffAnimClass(sswiper);
      } else {
        removeOffAnimClass(sswiper);
      }
    });
  },
  {
    threshold: 1 / 2,
  }
);

const slider = document.querySelectorAll(".slider").forEach((item) => {
  observerProjectsSwiper.observe(item);
});

observerProjectsMoreProjectsText = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      addOffAnimClass(moreprojects);
    } else {
      removeOffAnimClass(moreprojects);
    }
  });
});

const moreprojectsA = document
  .querySelectorAll(".moreprojectsA")
  .forEach((item) => {
    observerProjectsMoreProjectsText.observe(item);
  });

// END SECTION PROJECTS

// SECTION CONTACT
// Observer for width > 1200

const contact_header = document.querySelector(".contact_header");

observerProjectsText = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      addOffAnimClass(contact_header);
    } else {
      removeOffAnimClass(contact_header);
    }
  });
});

const contact = document
  .querySelectorAll(".contact")
  .forEach((item) => observerProjectsText.observe(item));

const listElements = document.querySelectorAll(".contactList div");
const list1 = document.querySelector("#list1");
const list2 = document.querySelector("#list2");
const list3 = document.querySelector("#list3");
const list4 = document.querySelector("#list4");

if (windowWidth > 1200) {
  observeListElements = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        listElements.forEach((element) => {
          addOffAnimClass(element);
        });
      } else {
        listElements.forEach((element) => {
          removeOffAnimClass(element);
        });
      }
    });
  });

  const contactList = document
    .querySelectorAll(".contactList")
    .forEach((item) => {
      observeListElements.observe(item);
    });
} else if (windowWidth <= 1200) {
  function createIntersectionObserver(element, targetElement) {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 1 / 2) {
            addOffAnimClass(targetElement);
          } else {
            removeOffAnimClass(targetElement);
          }
        });
      },
      {
        threshold: 1 / 2,
      }
    ).observe(element);
  }

  const listDivs = document.querySelectorAll(".contactList div");

  listDivs.forEach((div, index) => {
    const targetElement = document.querySelector(`#list${index + 1}`); // +1 Bo index 1 jest zerowy
    createIntersectionObserver(div, targetElement);
  });
}
