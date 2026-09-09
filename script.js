document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // 1. SCROLL REVEAL
  // ==========================================

  const revealElements = document.querySelectorAll(
    ".section-heading, .hero-copy, .hero-card, .about-copy, .memory-card, " +
    ".skill-card, .project, .timeline-item, .service, " +
    ".achievement-list > div, .quote-card, .contact-inner"
  );

  revealElements.forEach((el) => {
    el.classList.add("reveal");
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }

      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });
   
// ==========================================
// TYPEWRITER EFFECT
// ==========================================

const titleText = "Creating, exploring,";
const growingText = "and growing.";

const descriptionText =
  "Halo! Aku Karinca Bilqist Athariqa. Seorang pelajar yang suka mengeksplorasi desain, digital creative, baking, dan olahraga.";

const titleElement = document.getElementById("typing-title");
const growingElement = document.getElementById("typing-growing");
const descriptionElement = document.getElementById("typing-description");

let titleIndex = 0;
let growingIndex = 0;
let descriptionIndex = 0;


// ==========================================
// GARIS CURSOR
// ==========================================

function cursor(element) {
  element.classList.add("typing-cursor");
}

function removeCursor(element) {
  element.classList.remove("typing-cursor");
}


// ==========================================
// KETIK CREATING, EXPLORING
// ==========================================

function typeTitle() {

  cursor(titleElement);

  if (titleIndex < titleText.length) {

    titleElement.textContent =
      titleText.substring(0, titleIndex + 1);

    titleIndex++;

    setTimeout(typeTitle, 80);

  } else {

    // Hapus cursor dari exploring
    removeCursor(titleElement);

    // Pindahkan cursor ke growing
    setTimeout(typeGrowing, 300);
  }
}


// ==========================================
// KETIK AND GROWING
// ==========================================

function typeGrowing() {

  cursor(growingElement);

  if (growingIndex < growingText.length) {

    growingElement.textContent =
      growingText.substring(0, growingIndex + 1);

    growingIndex++;

    setTimeout(typeGrowing, 80);

  } else {

    // Cursor TETAP di growing
    // Jadi tidak stuck di exploring

    setTimeout(typeDescription, 500);
  }
}


// ==========================================
// KETIK DESKRIPSI
// ==========================================

function typeDescription() {

  if (descriptionIndex < descriptionText.length) {

    descriptionElement.textContent =
      descriptionText.substring(0, descriptionIndex + 1);

    descriptionIndex++;

    setTimeout(typeDescription, 35);
  }
}


// ==========================================
// MULAI
// ==========================================

setTimeout(typeTitle, 700);

  // ==========================================
  // 3. NAVBAR ACTIVE SECTION
  // ==========================================

  const sections =
    document.querySelectorAll("main section[id]");

  const navLinks =
    document.querySelectorAll(".navbar nav a");


  const sectionObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          const currentId =
            entry.target.getAttribute("id");


          navLinks.forEach((link) => {

            link.classList.remove("active");


            if (
              link.getAttribute("href") ===
              `#${currentId}`
            ) {

              link.classList.add("active");

            }

          });

        }

      });

    },
    {
      threshold: 0.4
    }
  );


  sections.forEach((section) => {
    sectionObserver.observe(section);
  });


  // ==========================================
  // 4. NAVBAR SAAT SCROLL
  // ==========================================

  const navbar =
    document.querySelector(".navbar");


  window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

      navbar.classList.add("scrolled");

    } else {

      navbar.classList.remove("scrolled");

    }

  });


  // ==========================================
  // 5. SMOOTH SCROLL
  // ==========================================

  navLinks.forEach((link) => {

    link.addEventListener("click", (e) => {

      const targetId =
        link.getAttribute("href");


      if (targetId.startsWith("#")) {

        e.preventDefault();


        const target =
          document.querySelector(targetId);


        if (target) {

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      }

    });

  });


  // ==========================================
  // 6. POP-IN ANGKA
  // ==========================================

  const numberElements =
    document.querySelectorAll(
      ".project-number, .skill-card b, " +
      ".timeline-item span, .achievement-list strong"
    );


  const numberObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("pop-in");

            numberObserver.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.5
      }
    );


  numberElements.forEach((el) => {
    numberObserver.observe(el);
  });


  // ==========================================
  // 7. STAGGER SKILLS
  // ==========================================

  const skillCards =
    document.querySelectorAll(".skill-card");


  skillCards.forEach((card, index) => {

    card.style.transitionDelay =
      `${index * 100}ms`;

  });


  // ==========================================
  // 8. STAGGER PORTFOLIO
  // ==========================================

  const projectCards =
    document.querySelectorAll(".project");


  projectCards.forEach((card, index) => {

    card.style.transitionDelay =
      `${index * 120}ms`;

  });


  // ==========================================
  // 9. TILT CARD
  // ==========================================

  const tiltCards =
    document.querySelectorAll(
      ".project, .skill-card, .service, .quote-card, .memory-card"
    );


  tiltCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

      const rect =
        card.getBoundingClientRect();


      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;


      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;


      const rotateX =
        ((y - centerY) / centerY) * -4;

      const rotateY =
        ((x - centerX) / centerX) * 4;


      card.style.transform =
        `perspective(800px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         scale(1.02)`;

    });


    card.addEventListener("mouseleave", () => {

      card.style.transform = "";

    });

  });


  // ==========================================
  // 10. ANIMASI TOMBOL
  // ==========================================

  const buttons =
    document.querySelectorAll(".btn, .text-link");


  buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

      button.style.transform =
        "translateY(-3px)";

    });


    button.addEventListener("mouseleave", () => {

      button.style.transform = "";

    });

  });


  // ==========================================
  // 11. ANIMASI CONTACT
  // ==========================================

  const contactLinks =
    document.querySelectorAll(".contact-info a");


  contactLinks.forEach((link) => {

    link.addEventListener("mouseenter", () => {

      link.style.transform =
        "translateY(-5px)";

    });


    link.addEventListener("mouseleave", () => {

      link.style.transform = "";

    });

  });


  // ==========================================
  // 12. FADE-IN HERO
  // ==========================================

  const hero =
    document.querySelector(".hero");


  if (hero) {

    hero.style.opacity = "0";
    hero.style.transform = "translateY(20px)";


    setTimeout(() => {

      hero.style.transition =
        "opacity 1s ease, transform 1s ease";

      hero.style.opacity = "1";
      hero.style.transform = "translateY(0)";

    }, 150);

  }

    // ==========================================
  // 13. FOTO MEMORY BERGERAK
  // ==========================================

  const memoryPhoto =
    document.querySelector(".memory-card img");

  if (memoryPhoto) {

    let startTime = null;

    function floatingMemoryPhoto(timestamp) {

      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;

      // Gerakan naik turun + sedikit rotasi
      const moveY =
        Math.sin(elapsed * 0.002) * 8;

      const rotate =
        Math.sin(elapsed * 0.0015) * 1.5;

      memoryPhoto.style.transform =
        `translateY(${moveY}px) rotate(${rotate}deg)`;

      requestAnimationFrame(floatingMemoryPhoto);
    }

    requestAnimationFrame(floatingMemoryPhoto);
  }

  // ==========================================
// 13. TYPEWRITER + GERAK "KARINCA KICIKK"
// ==========================================

const memoryText = "karinca kicikk";
const memoryElement =
  document.getElementById("typing-memory");

let memoryIndex = 0;

function typeMemoryText() {

  if (memoryIndex < memoryText.length) {

    memoryElement.textContent =
      memoryText.substring(0, memoryIndex + 1);

    memoryIndex++;

    setTimeout(typeMemoryText, 120);

  } else {

    // Setelah selesai mengetik,
    // mulai animasi gerak
    memoryElement.classList.add("memory-floating");
  }
}

// Mulai mengetik setelah 1 detik
setTimeout(typeMemoryText, 1000);

});