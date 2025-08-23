window.addEventListener("load", () => {
    document.body.classList.add("loaded"); 
    const homeSection = document.getElementById("home");
    if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
    }
});

const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
const body      = document.body;

function toggleNav() {
  const open = navLinks.classList.toggle('active');
  hamburger.classList.toggle('active', open);
  // lock scroll when menu is open
  body.style.overflow = open ? 'hidden' : 'auto'; 
}

hamburger?.addEventListener('click', toggleNav);

// close menu
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) toggleNav();
  });
});

// contact form submit
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stop default redirect
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        status.textContent = "Thanks! Your message has been sent.";
        status.style.color = "grey";
        status.style.textAlign = "right";
        form.reset();
      } else {
        status.textContent = "Oops! Something went wrong. Try again.";
        status.style.color = "grey";
        status.style.textAlign = "right";
      }
    } catch (error) {
      status.textContent = "Network error. Please try later.";
      status.style.color = "grey";
      status.style.textAlign = "right";
    }
  });
});
