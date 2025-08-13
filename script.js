// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
  
  // Dynamic year
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Typing effect
  const text = "Aspiring Frontend Developer | MERN Learner";
  let i = 0;
  function typingEffect() {
    if (i < text.length) {
      document.getElementById("typing-text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typingEffect, 100);
    }
  }
  typingEffect();
  