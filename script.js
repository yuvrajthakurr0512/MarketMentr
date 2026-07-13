// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Contact form — submits to Formspree so messages land directly in your inbox
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  note.textContent = "Sending...";

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      note.textContent = "Message sent! I'll get back to you soon.";
      form.reset();
    } else {
      note.textContent = "Couldn't send — please email yuvrajs10kbdi@gmail.com directly.";
    }
  } catch (err) {
    note.textContent = "Couldn't send — please email yuvrajs10kbdi@gmail.com directly.";
  }
});
