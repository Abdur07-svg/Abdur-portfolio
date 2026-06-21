// ===== STAR BACKGROUND =====
function createStars() {
  const starCount = Math.min(50, window.innerWidth < 768 ? 25 : 50);
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.cssText = `
      position: fixed;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      background: rgba(255, 255, 255, ${Math.random() * 0.7 + 0.3});
      border-radius: 50%;
      left: ${Math.random() * 100}vw;
      top: ${Math.random() * 100}vh;
      animation: twinkle ${Math.random() * 3 + 2}s infinite;
      animation-delay: ${Math.random() * 3}s;
      pointer-events: none;
      z-index: 0;
    `;
    document.body.appendChild(star);
  }
}

// Add twinkle keyframe dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
  }
`;
document.head.appendChild(style);

createStars();

// ===== ANIMATED UI TRANSFORMATION =====
function createUiProgress() {
  const progress = document.createElement('div');
  progress.className = 'ui-progress';
  document.body.appendChild(progress);

  function updateProgress() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progressValue = scrollable > 0 ? window.scrollY / scrollable : 0;
    progress.style.transform = 'scaleX(' + Math.min(progressValue, 1) + ')';
  }

  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
}

function createAmbientLayer() {
  const layer = document.createElement('div');
  layer.className = 'ambient-layer';
  layer.setAttribute('aria-hidden', 'true');

  const orbitCount = window.innerWidth < 768 ? 12 : 22;
  for (let i = 0; i < orbitCount; i++) {
    const orbit = document.createElement('span');
    orbit.className = 'ambient-orbit';
    orbit.style.setProperty('--orbit-x', Math.random() * 100 + 'vw');
    orbit.style.setProperty('--orbit-y', Math.random() * 100 + 'vh');
    orbit.style.setProperty('--orbit-speed', Math.random() * 7 + 7 + 's');
    orbit.style.setProperty('--orbit-delay', Math.random() * -9 + 's');
    layer.appendChild(orbit);
  }

  document.body.prepend(layer);
}

function enableTiltCards() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('section, .project-card, .skill-item, .qual-item').forEach(function(card) {
    card.classList.add('tilt-active');

    card.addEventListener('mousemove', function(event) {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = 'perspective(900px) rotateX(' + (-y * 3.5) + 'deg) rotateY(' + (x * 3.5) + 'deg) translateY(-2px)';
    });

    card.addEventListener('mouseleave', function() {
      card.style.transform = '';
    });
  });
}

function enableButtonRipples() {
  document.querySelectorAll('a, button').forEach(function(button) {
    button.addEventListener('click', function(event) {
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple-dot';
      ripple.style.left = event.clientX - rect.left + 'px';
      ripple.style.top = event.clientY - rect.top + 'px';
      button.appendChild(ripple);
      setTimeout(function() {
        ripple.remove();
      }, 650);
    });
  });
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  createUiProgress();
  createAmbientLayer();
  enableTiltCards();
  enableButtonRipples();
} else {
  createUiProgress();
}

// ===== LOADING SCREEN =====
const loaderStatus = document.getElementById('loader-status');
const loaderProgressFill = document.getElementById('loader-progress-fill');
const loaderProgressGlow = document.querySelector('.loader-progress-glow');
const loaderProgressText = document.getElementById('loader-progress-text');
const metricCore = document.getElementById('metric-core');
const metricMem = document.getElementById('metric-mem');
const metricNet = document.getElementById('metric-net');
const glitchText = document.querySelector('.glitch-text');

const loaderPhrases = [
  'BOOT SEQUENCE INITIATED',
  'LOADING NEURAL NETWORK...',
  'CALIBRATING QUANTUM CORE...',
  'SYNCING ASSETS...',
  'OPTIMIZING RENDER PIPELINE...',
  'SYSTEM READY'
];

// Create floating particles
function createLoaderParticles() {
  const container = document.getElementById('loader-particles');
  if (!container) return;
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'loader-particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (Math.random() * 8 + 4) + 's';
    p.style.animationDelay = (Math.random() * 5) + 's';
    p.style.opacity = Math.random() * 0.5 + 0.2;
    const colors = ['var(--cyan)', 'var(--accent-pink)', 'var(--accent-green)', 'var(--accent-gold)'];
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    container.appendChild(p);
  }
}
createLoaderParticles();

// Progress animation
let progress = 0;
const totalDuration = 2800; // ms
const interval = 40; // update every 40ms
const increment = 100 / (totalDuration / interval);

const progressTimer = setInterval(function() {
  progress += increment + (Math.random() * 2 - 0.5);
  if (progress >= 100) {
    progress = 100;
    clearInterval(progressTimer);
  }

  const pct = Math.min(Math.round(progress), 100);
  if (loaderProgressFill) loaderProgressFill.style.width = pct + '%';
  if (loaderProgressGlow) loaderProgressGlow.style.width = pct + '%';
  if (loaderProgressText) loaderProgressText.textContent = pct + '%';

  // Update metrics with random fluctuations
  if (metricCore) metricCore.textContent = Math.min(Math.round(progress * 0.9 + Math.random() * 10), 100) + '%';
  if (metricMem) metricMem.textContent = Math.min(Math.round(progress * 0.7 + Math.random() * 30), 100) + '%';
  if (metricNet) metricNet.textContent = Math.min(Math.round(progress * 0.8 + Math.random() * 20), 100) + '%';

  // Update status text based on progress
  const phraseIndex = Math.min(Math.floor(progress / 20), loaderPhrases.length - 1);
  if (loaderStatus && loaderStatus.textContent !== loaderPhrases[phraseIndex]) {
    loaderStatus.textContent = loaderPhrases[phraseIndex];
  }

  // Glitch effect on text at certain points
  if (pct === 33 || pct === 66 || pct === 99) {
    if (glitchText) {
      glitchText.style.animation = 'none';
      glitchText.offsetHeight; // trigger reflow
      glitchText.style.animation = '';
    }
  }
}, interval);

// Hide loader on window load
window.addEventListener('load', function() {
  setTimeout(function() {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('loader-hidden');
      setTimeout(function() {
        loader.style.display = 'none';
      }, 800);
    }
  }, 3000);
});

if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
// ===== TYPING ANIMATION =====
const texts = [
  "Student",
  "AI Enthusiast",
  "Game Developer",
  "Python Coder",
  "Web Developer",
  "Future Engineer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing-text');

function type() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    speed = 300;
  }

  setTimeout(type, speed);
}

setTimeout(type, 3000);

// ===== NAVIGATION =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');

function closeMobileMenu() {
  navToggle.classList.remove('active');
  navLinks.classList.remove('active');
}

navToggle.addEventListener('click', function() {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

navLinkItems.forEach(function(link) {
  link.addEventListener('click', closeMobileMenu);
});

window.addEventListener('scroll', function() {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 760) {
    closeMobileMenu();
  }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', function() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinkItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal-section').forEach(section => {
  revealObserver.observe(section);
});

// ===== GLOWING CURSOR =====
const cursorGlow = document.getElementById('cursor-glow');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

if (!window.matchMedia('(pointer: coarse)').matches) {
  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursorGlow.style.left = cursorX + 'px';
    cursorGlow.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Make glow bigger on interactive elements
  document.querySelectorAll('a, button, .magnetic-btn, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', function() {
      cursorGlow.style.width = '500px';
      cursorGlow.style.height = '500px';
      cursorGlow.style.background = `radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, rgba(0, 212, 255, 0.05) 40%, transparent 70%)`;
    });

    el.addEventListener('mouseleave', function() {
      cursorGlow.style.width = '400px';
      cursorGlow.style.height = '400px';
      cursorGlow.style.background = `radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, rgba(0, 212, 255, 0.03) 40%, transparent 70%)`;
    });
  });
} else {
  cursorGlow.style.display = 'none';
}

// ===== MAGNETIC BUTTONS =====
if (!window.matchMedia('(pointer: coarse)').matches) {
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', function() {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

// ===== SKILL BARS ANIMATION =====
const skillObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const targetWidth = fill.getAttribute('data-width');
      setTimeout(function() {
        fill.style.width = targetWidth + '%';
      }, 300);
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-fill').forEach(fill => skillObserver.observe(fill));

// ===== CR7 SECTION =====
const cr7Section = document.getElementById('cr7');
const cr7Button = document.getElementById('cr7-btn');
const cr7Quote = document.getElementById('cr7-quote');
const cr7Note = document.querySelector('.cr7-note');

const cr7Quotes = [
  '"Talent without work is nothing." - CR7',
  '"I\'m not a perfectionist, but I like to feel that things are done well."',
  '"Your love makes me strong. Your hate makes me unstoppable."',
  '"Dreams are not what you see in your sleep. Dreams are things which do not let you sleep."',
  '"I don\'t need to prove anything to anyone - I only need to prove it to myself."',
  '"Hard work beats talent when talent doesn\'t work hard."',
  '"Discipline turns dreams into reality."',
  '"Talent starts the journey. Consistency builds the legacy."',
  '"Train your mind like a champion, code like a builder."',
  '"Confidence, hard work, and focus."',
  '"SIUUUU!"'
];

let cr7QuoteIndex = 0;

if (cr7Button && cr7Quote && cr7Section) {
  cr7Button.addEventListener('click', function() {
    if (cr7Note) cr7Note.style.display = 'none';

    cr7Quote.classList.add('hidden');

    setTimeout(function() {
      cr7Quote.textContent = cr7Quotes[cr7QuoteIndex];
      cr7Quote.classList.remove('hidden');
      cr7QuoteIndex = (cr7QuoteIndex + 1) % cr7Quotes.length;
    }, 350);

    cr7Section.classList.remove('siuuu-active');
    setTimeout(function() {
      cr7Section.classList.add('siuuu-active');
    }, 10);
  });
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('name');
const contactMessage = document.getElementById('message');
const contactButton = contactForm ? contactForm.querySelector('.btn-send') : null;
const contactButtonText = document.getElementById('btn-text');
const formSuccess = document.getElementById('form-success');
const formError = document.getElementById('form-error');

function setContactFeedback(type, message) {
  if (formSuccess) formSuccess.style.display = 'none';
  if (formError) formError.style.display = 'none';

  if (type === 'success' && formSuccess) {
    formSuccess.textContent = message;
    formSuccess.style.display = 'block';
  }
  if (type === 'error' && formError) {
    formError.textContent = message;
    formError.style.display = 'block';
  }
}

function setContactLoading(isLoading) {
  if (!contactButton) return;
  contactButton.disabled = isLoading;
  contactButton.classList.toggle('loading', isLoading);
  if (contactButtonText) {
    contactButtonText.textContent = isLoading ? 'Sending...' : 'Send Message';
  }
}

function validateContactForm() {
  const name = contactName ? contactName.value.trim() : '';
  const message = contactMessage ? contactMessage.value.trim() : '';

  if (contactName) contactName.classList.remove('input-error');
  if (contactMessage) contactMessage.classList.remove('input-error');

  if (name.length < 2) {
    if (contactName) {
      contactName.classList.add('input-error');
      contactName.focus();
    }
    setContactFeedback('error', 'Please enter your name (at least 2 characters).');
    return false;
  }

  if (message.length < 5) {
    if (contactMessage) {
      contactMessage.classList.add('input-error');
      contactMessage.focus();
    }
    setContactFeedback('error', 'Please write a little more in your message (at least 5 characters).');
    return false;
  }

  return true;
}

if (contactForm && contactButton && formSuccess && formError) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    if (!validateContactForm()) return;

    setContactFeedback('', '');
    setContactLoading(true);

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (!response.ok) throw new Error('Form submit failed');

      contactForm.reset();
      setContactFeedback('success', "Message sent successfully! I'll reply soon.");
    } catch (error) {
      setContactFeedback('error', 'Something went wrong. Please check your internet and try again.');
    } finally {
      setContactLoading(false);
    }
  });

  [contactName, contactMessage].forEach(function(field) {
    if (field) {
      field.addEventListener('input', function() {
        field.classList.remove('input-error');
        if (formError) formError.style.display = 'none';
      });
    }
  });
}

// ===== LIGHTBOX =====
window.openLightbox = function(src) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = 'auto';
};

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});

// ===== BACK TO TOP =====
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== PERFORMANCE: LAZY LOAD IMAGES =====
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ===== CONSOLE EASTER EGG =====
console.log('%cAR7 PORTFOLIO v2.0', 'color: #00d4ff; font-size: 24px; font-weight: bold; font-family: Orbitron;');
console.log('%cBuilt by Abdur Rajjak', 'color: #ffd166; font-size: 14px;');
console.log('%c"Still learning, still improving - just getting started."', 'color: #00ff88; font-style: italic;');