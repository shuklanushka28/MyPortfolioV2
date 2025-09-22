function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
// Animate education and pitch on scroll
const hiddenElements = document.querySelectorAll(".hidden, .hidden-detail");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      // Remove class when out of view (so it replays on scroll)
      entry.target.classList.remove("show");
    }
  });
}, { threshold: 0.2 }); // triggers when 20% visible

hiddenElements.forEach((el) => observer.observe(el));


hiddenElements.forEach((el) => observer.observe(el));
// Animate education block
const eduCard = document.querySelector(".edu-card");

const eduObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      // Reveal details after a short delay
      const details = entry.target.querySelector(".edu-details");
      setTimeout(() => {
        details.classList.add("show");
      }, 600);
    }
  });
});

if (eduCard) {
  eduObserver.observe(eduCard);
}
// Typing animation for "Data Analyst"
const roleText = document.getElementById("role-text");
const role = "Data Analyst";

function typeRole() {
  roleText.textContent = ""; // clear before typing
  let i = 0;

  const typing = setInterval(() => {
    roleText.textContent = role.slice(0, i + 1);
    i++;
    if (i === role.length) {
      clearInterval(typing);
    }
  }, 150); // typing speed
}

// Intersection Observer to re-trigger on scroll
const roleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      typeRole(); // start typing when visible
    }
  });
}, { threshold: 0.5 });

if (roleText) {
  roleObserver.observe(roleText);
}
