// JavaScript/Node.js code for dynamic content loading
window.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
  
    // Load Home page by default
    loadPage('home');
  
    // Handle navigation clicks to load respective pages
    const navLinks = document.querySelectorAll('nav a.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('href').replace('.html', '');
        loadPage(page);
      });
    });
  
    // Function to load individual pages
    function loadPage(page) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `${page}.html`, true);
      xhr.onload = function () {
        if (xhr.status === 200) {
          content.innerHTML = xhr.responseText;
        }
      };
      xhr.send();
    }
  });
  