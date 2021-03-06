function toggleNav() {
  let options = {
    threshold: 0.2,
  };
  let homeSect = document.querySelector(".home");
  let aboutSect = document.querySelector(".about");
  let nav = document.querySelector("nav ");
  let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      // console.log(entry)
      if (!entry.isIntersecting) {
        // nav.style.opacity= '1';
        nav.style.transform = "translateY(0)";
      } else {
        // nav.style.opacity = '0';
        nav.style.transform = "translateY(-100%)";
      }
    });
  }, options);
  observer.observe(homeSect);
}

//page indicator
function pageIndicator() {
  let options = {
    threshold: 0.6,
  };
  let icons = document.querySelectorAll(".nav-icons a ");
  let sections = document.querySelectorAll("section");

  let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let section = entry.target.getAttribute("id");
        let navActive = document.querySelector(`a[href="#${section}"]`);
        icons.forEach(icon => icon.classList.remove('page-active'))
        navActive.classList.add("page-active");

      }

    });
  }, options);
  sections.forEach((section) => {
    observer.observe(section);
  });
}

function aos() {
  let options = {
    threshold: 0.3,
  };
  let boxes = document.querySelectorAll(".boxes");
  let left = document.querySelectorAll('.left');
  let right = document.querySelectorAll('.right');

  let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transform = 'translateX(0)'
        entry.target.style.opacity = '100%'

        // left.style.transform='translate(0)'

        observer.unobserve(entry.target)
      }
    })
  }, options)
  boxes.forEach((box) => {
    observer.observe(box);
  });
}

function skillIn() {
  let element = document.querySelectorAll('.up-animation');
  let options = {
    threshold: 0.3,
  };
  let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transform = 'translateX(0)'
        observer.unobserve(entry.target)
      }

    })
  }, options)

  // observer.observe(skill);
  // observer.observe(skillHeader);
  element.forEach(el => {
    observer.observe(el)
  })

}





// skillIn()
// aos()
// toggleNav();
// pageIndicator();

// gsap
tl = gsap.timeline({
  defaults: {
    duration: 0.5,
    // delay: 4,

  }
})
window.addEventListener('load', () => {
  setTimeout(() => {
    tl

      .to('main', {
        opacity: 1,

      })
      .from('.greeting', {
        x: 30,
        opacity: 0,

      })
      .from('.my-name', {
        y: 30,
        opacity: 0,
        ease: 'sine'
      })
      .from('.catch-phrase', {
        x: 30,
        opacity: 0,
        ease: 'bounce'
      })
      .from('.brief-intro', {
        y: 30,
        opacity: 0,
        ease: 'power3'
      })

      .from('.cta-button', {
        opacity: 0,
        ease: 'back',
        y: 30,
        duration: 0.5

      })
      .from('.nav-items ul li', {
        opacity: 0,
        ease: 'sine',
        stagger: 0.5,
        delay: 1
      })
      .from('.logo', {
        opacity: 0,
        x: -30,
        ease: 'back',
        delay: 1

      })
      .to('aside', {
        opacity: 1,
        ease: 'back',
        y: 0,
        duration: 2

      })

  }, 10);
})

let diamond = document.querySelectorAll('#diamond')
let diamondPath = document.querySelectorAll('#diamondPath')

// pwa and service workers
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js')
//     .then(() => console.log('service woker registered'))
//     .catch(() => console.log('service worker not registered'))
// }