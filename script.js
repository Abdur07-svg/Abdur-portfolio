// Initialize Lucide Icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
  // Custom Cursor removed for vgil layout
  // --- Navbar Scroll Effect ---
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // --- Mobile Menu Toggle ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle('open');
    const icon = mobileToggle.querySelector('i');
    if (isMenuOpen) {
      icon.setAttribute('data-lucide', 'x');
    } else {
      icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
  }

  mobileToggle.addEventListener('click', toggleMenu);
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) toggleMenu();
    });
  });

  // Typing effect removed

  // --- Scroll Reveal Animations ---
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  
  const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // --- Form Handling ---
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i data-lucide="loader" class="spin"></i> Sending...';
      lucide.createIcons();
      
      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          formStatus.textContent = 'Message sent successfully! I will reply soon.';
          formStatus.className = 'form-status success';
          contactForm.reset();
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        formStatus.textContent = 'Something went wrong. Please try again.';
        formStatus.className = 'form-status error';
      } finally {
        btn.innerHTML = originalText;
        lucide.createIcons();
        
        setTimeout(() => {
          formStatus.textContent = '';
          formStatus.className = 'form-status';
        }, 5000);
      }
    });
  }

  // Back to Top Button removed
  // --- Active Nav Link (Scroll Spy) ---
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserverOptions = {
    threshold: 0.3,
    rootMargin: "-100px 0px -20% 0px"
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove active class from all
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to corresponding link
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, navObserverOptions);

  sections.forEach(section => navObserver.observe(section));

  // Also handle click to update active immediately
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // --- Theme Toggle ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIconLight = document.querySelector('.theme-icon-light');
  const themeIconDark = document.querySelector('.theme-icon-dark');
  
  // Check for saved user preference, if any, on load of the website
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.className = savedTheme;
    updateThemeIcon(savedTheme);
  } else {
    // Default to dark theme
    document.body.className = 'dark-theme';
    updateThemeIcon('dark-theme');
  }

  function updateThemeIcon(theme) {
    if (theme === 'light-theme') {
      // In light theme, show moon icon (to switch to dark)
      themeIconLight.style.display = 'none'; // hide sun
      themeIconDark.style.display = 'block'; // show moon
    } else {
      // In dark theme, show sun icon (to switch to light)
      themeIconLight.style.display = 'block'; // show sun
      themeIconDark.style.display = 'none'; // hide moon
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', (e) => {
      const toggle = () => {
        if (document.body.classList.contains('dark-theme')) {
          document.body.className = 'light-theme';
          localStorage.setItem('theme', 'light-theme');
          updateThemeIcon('light-theme');
        } else {
          document.body.className = 'dark-theme';
          localStorage.setItem('theme', 'dark-theme');
          updateThemeIcon('dark-theme');
        }
      };

      if (!document.startViewTransition) {
        toggle();
        return;
      }

      const x = e.clientX;
      const y = e.clientY;
      const endRadius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
      );

      const transition = document.startViewTransition(toggle);

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 600,
            easing: 'ease-out',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      });
    });
  }

});

// Add spin animation to CSS dynamically for the loader
const style = document.createElement('style');
style.innerHTML = `
  .spin {
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

// Preloader Hide Logic
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    // Hide preloader slightly after animation finishes
    setTimeout(() => {
      preloader.classList.add('hide');
    }, 2800); 
  }
});
