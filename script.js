// Initialize Lenis for smooth scrolling (Desktop only, native touch on mobile/tablet)
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || window.matchMedia('(pointer: coarse)').matches;
let lenis = null;

if (!isTouchDevice && typeof Lenis !== 'undefined') {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 0
  });
}

// Integrate Lenis with GSAP ScrollTrigger
if (typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  if (lenis) {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
  }
  // Restore normal GSAP lag smoothing for frame drop recovery
  gsap.ticker.lagSmoothing(500, 33);
}

lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  let isScrolled = false;

  window.addEventListener('scroll', () => {
    const shouldBeScrolled = window.scrollY > 50;
    if (shouldBeScrolled !== isScrolled) {
      isScrolled = shouldBeScrolled;
      if (isScrolled) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      // Notify Spider-Man system of navbar state change
      if (window.__updateSpidermanAnchor) {
        window.__updateSpidermanAnchor();
      }
    }
  }, { passive: true });

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


  // Premium Reveal Animations with GSAP
  if (typeof gsap !== 'undefined') {
    const revealElements = gsap.utils.toArray('.reveal-up, .reveal-left, .reveal-right');
    
    revealElements.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        toggleClass: "active",
        once: true,
      });
    });

    // Add Parallax to About Image
    const aboutImage = document.querySelector('.about-image');
    if (aboutImage) {
      gsap.fromTo(aboutImage, 
        { y: -30 },
        {
          y: 30,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    }
  } else {
    // Fallback IntersectionObserver if GSAP fails to load
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    revealElements.forEach(el => revealObserver.observe(el));
  }

// --- Form Handling ---
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.disabled = true;
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

      const data = await response.json();

      if (response.ok) {
        showToast('Message sent successfully! I will reply soon.', 'success');
        contactForm.reset();
      } else {
        console.error('Formspree Error:', data);

        const errorMessage =
          data?.errors?.map(error => error.message).join(', ') ||
          data?.error ||
          'Unable to send your message. Please try again.';

        showToast(errorMessage, 'error');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      showToast('Network error. Please check your internet connection.', 'error');

    } finally {
      btn.disabled = false;
      btn.innerHTML = originalText;
      lucide.createIcons();
    }
  });
}

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserverOptions = {
    threshold: 0.3,
    rootMargin: "-100px 0px -20% 0px"
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        mobileLinks.forEach(link => link.classList.remove('highlight'));

        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }

        const activeMobileLink = document.querySelector(`.mobile-link[href="#${id}"]`);
        if (activeMobileLink) {
          activeMobileLink.classList.add('highlight');
        }
      }
    });
  }, navObserverOptions);

  sections.forEach(section => navObserver.observe(section));

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobileLinks.forEach(l => l.classList.remove('highlight'));
      this.classList.add('highlight');
    });
  });

  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIconLight = document.querySelector('.theme-icon-light');
  const themeIconDark = document.querySelector('.theme-icon-dark');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.className = savedTheme;
    updateThemeIcon(savedTheme);
  } else {
    document.body.className = 'dark-theme';
    updateThemeIcon('dark-theme');
  }

  function updateThemeIcon(theme) {
    if (theme === 'light-theme') {
      themeIconLight.style.display = 'none'; // hide sun
      themeIconDark.style.display = 'block'; // show moon
    } else {
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

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('hide');
    }, 2800);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const expandingCards = document.querySelectorAll('.expanding-card');
  const cardsContainer = document.getElementById('expanding-cards');

  if (cardsContainer && expandingCards.length > 0) {
    let activeIndex = 0;

    function updateGrid() {
      const isDesktop = window.innerWidth >= 768;

      const gridTemplate = Array.from({ length: expandingCards.length }).map((_, i) => {
        return i === activeIndex ? '5fr' : '1fr';
      }).join(' ');

      if (isDesktop) {
        cardsContainer.style.gridTemplateColumns = gridTemplate;
        cardsContainer.style.gridTemplateRows = '1fr';
      } else {
        cardsContainer.style.gridTemplateColumns = '1fr';
        cardsContainer.style.gridTemplateRows = gridTemplate;
      }

      expandingCards.forEach((card, index) => {
        if (index === activeIndex) {
          card.classList.add('active');
          card.setAttribute('data-active', 'true');
        } else {
          card.classList.remove('active');
          card.setAttribute('data-active', 'false');
        }
      });
    }

    updateGrid();

    window.addEventListener('resize', updateGrid);

    expandingCards.forEach((card, index) => {
      const handleInteract = () => {
        if (activeIndex !== index) {
          activeIndex = index;
          updateGrid();
        }
      };

      const showProcessing = (link) => {
        if (!link) return;
        const originalContent = link.innerHTML;
        link.innerHTML = '<span style="font-size: 0.75rem; font-weight: 600; padding: 0 4px; white-space: nowrap;">Upcoming...</span>';
        link.style.borderRadius = '12px';
        setTimeout(() => {
          link.innerHTML = originalContent;
          link.style.borderRadius = '';
          lucide.createIcons();
        }, 2000);
      };

      const handleClick = (e) => {
        const linkBtn = e.target.closest('.card-link');
        if (linkBtn) {
          e.preventDefault();
          const href = linkBtn.getAttribute('href');
          if (!href || href === '#') {
            showProcessing(linkBtn);
          } else {
            if (linkBtn.getAttribute('target') === '_blank') {
              window.open(href, '_blank');
            } else {
              window.location.href = href;
            }
          }
          return;
        }

        const isDesktop = window.innerWidth >= 768;
        if (isDesktop) {
          const link = card.querySelector('.card-link');
          if (link) {
            const href = link.getAttribute('href');
            if (href && href !== '#') {
              if (link.getAttribute('target') === '_blank') {
                window.open(href, '_blank');
              } else {
                window.location.href = href;
              }
            } else {
              showProcessing(link);
            }
          }
        } else {
          handleInteract();
        }
      };

      card.addEventListener('mouseenter', handleInteract);
      card.addEventListener('focus', handleInteract);
      card.addEventListener('click', handleClick);
    });
  }


  window.showToast = function (message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icon = type === 'success' ? 'check-circle' : 'alert-circle';

    toast.innerHTML = `
      <i data-lucide="${icon}" class="toast-icon"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 400); // Wait for transition
    }, 3000);
  };

  // ==========================================================================
  // AR7 Futuristic HUD Custom Cursor System
  // ==========================================================================
  const cursorSystem = document.getElementById('ar7-cursor-system');
  const cursorPoint = cursorSystem ? cursorSystem.querySelector('.ar7-cursor-point') : null;
  const cursorRing = cursorSystem ? cursorSystem.querySelector('.ar7-cursor-ring') : null;
  const cursorTracer = cursorSystem ? cursorSystem.querySelector('.ar7-cursor-tracer') : null;
  const trail1 = cursorSystem ? cursorSystem.querySelector('.ar7-cursor-trail.trail-1') : null;
  const trail2 = cursorSystem ? cursorSystem.querySelector('.ar7-cursor-trail.trail-2') : null;

  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || window.matchMedia('(pointer: coarse)').matches;

  if (cursorSystem && cursorPoint && cursorRing && !isTouchDevice && window.innerWidth > 768) {
    // Reveal cursor and hide native cursor
    document.body.classList.add('ar7-cursor-ready');

    let mouseX = -100;
    let mouseY = -100;
    let prevMouseX = -100;
    let prevMouseY = -100;

    let ringX = -100;
    let ringY = -100;
    let tracerX = -100;
    let tracerY = -100;
    let trail1X = -100;
    let trail1Y = -100;
    let trail2X = -100;
    let trail2Y = -100;

    let isVisible = false;
    let isSpiderDragging = false;

    // Instant position tracking for primary reticle
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        cursorPoint.style.opacity = '1';
        cursorRing.style.opacity = '1';
        if (cursorTracer) cursorTracer.style.opacity = '1';
        ringX = mouseX;
        ringY = mouseY;
        tracerX = mouseX;
        tracerY = mouseY;
        trail1X = mouseX;
        trail1Y = mouseY;
        trail2X = mouseX;
        trail2Y = mouseY;
      }

      cursorPoint.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      isVisible = false;
      cursorPoint.style.opacity = '0';
      cursorRing.style.opacity = '0';
      if (cursorTracer) cursorTracer.style.opacity = '0';
      if (trail1) trail1.style.opacity = '0';
      if (trail2) trail2.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      isVisible = true;
      cursorPoint.style.opacity = '1';
      cursorRing.style.opacity = '1';
      if (cursorTracer) cursorTracer.style.opacity = '1';
    });

    // High-performance RAF lerp animation loop
    function renderAR7Cursor() {
      if (isVisible) {
        // Velocity calculation for dynamic motion ghost trails
        const dist = Math.hypot(mouseX - prevMouseX, mouseY - prevMouseY);
        prevMouseX = mouseX;
        prevMouseY = mouseY;

        // Smooth follower lerping
        ringX += (mouseX - ringX) * 0.22;
        ringY += (mouseY - ringY) * 0.22;
        cursorRing.style.transform = `translate3d(${ringX.toFixed(2)}px, ${ringY.toFixed(2)}px, 0) translate(-50%, -50%)`;

        if (cursorTracer) {
          tracerX += (mouseX - tracerX) * 0.12;
          tracerY += (mouseY - tracerY) * 0.12;
          cursorTracer.style.transform = `translate3d(${tracerX.toFixed(2)}px, ${tracerY.toFixed(2)}px, 0) translate(-50%, -50%)`;
        }

        if (trail1) {
          trail1X += (mouseX - trail1X) * 0.32;
          trail1Y += (mouseY - trail1Y) * 0.32;
          trail1.style.transform = `translate3d(${trail1X.toFixed(2)}px, ${trail1Y.toFixed(2)}px, 0) translate(-50%, -50%)`;
          const trailOpacity = Math.min(0.5, Math.max(0, (dist - 1.5) * 0.04));
          trail1.style.opacity = trailOpacity.toFixed(2);
        }

        if (trail2) {
          trail2X += (mouseX - trail2X) * 0.18;
          trail2Y += (mouseY - trail2Y) * 0.18;
          trail2.style.transform = `translate3d(${trail2X.toFixed(2)}px, ${trail2Y.toFixed(2)}px, 0) translate(-50%, -50%)`;
          const trail2Opacity = Math.min(0.35, Math.max(0, (dist - 2) * 0.03));
          trail2.style.opacity = trail2Opacity.toFixed(2);
        }
      }
      requestAnimationFrame(renderAR7Cursor);
    }
    requestAnimationFrame(renderAR7Cursor);

    // Dynamic Hover Delegation for Links, Buttons & Cards
    document.addEventListener('mouseover', (e) => {
      const spidermanTarget = e.target.closest('#spiderman-character');
      if (spidermanTarget) {
        cursorSystem.classList.add('is-spider-hover');
        return;
      }

      const interactiveTarget = e.target.closest('a, button, input, textarea, select, .expanding-card, .custom-option, .custom-select-trigger, .theme-icon-light, .theme-icon-dark, .btn-view-projects, .btn-contact, .pill, [role="button"]');
      if (interactiveTarget) {
        cursorSystem.classList.add('is-hovering');
      }
    });

    document.addEventListener('mouseout', (e) => {
      const spidermanTarget = e.target.closest('#spiderman-character');
      if (spidermanTarget) {
        cursorSystem.classList.remove('is-spider-hover');
      }

      const interactiveTarget = e.target.closest('a, button, input, textarea, select, .expanding-card, .custom-option, .custom-select-trigger, .theme-icon-light, .theme-icon-dark, .btn-view-projects, .btn-contact, .pill, [role="button"]');
      if (interactiveTarget) {
        cursorSystem.classList.remove('is-hovering');
      }
    });

    // Subtle Magnetic Interaction on Buttons & Links
    const magneticElements = document.querySelectorAll('.btn, .brand-link, .nav-link, .btn-view-projects, .btn-contact, #theme-toggle, .pill');
    magneticElements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        // Subtle magnetic displacement (max 3-5px)
        el.style.transform = `translate3d(${(relX * 0.16).toFixed(1)}px, ${(relY * 0.16).toFixed(1)}px, 0)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate3d(0, 0, 0)';
        el.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
        setTimeout(() => {
          el.style.transition = '';
        }, 300);
      });
    });

    // Spider-Man Dragging & Grab Interaction
    const spidermanChar = document.getElementById('spiderman-character');
    if (spidermanChar) {
      spidermanChar.addEventListener('pointerdown', () => {
        isSpiderDragging = true;
        cursorSystem.classList.add('is-spider-grabbing');
      });

      window.addEventListener('pointerup', () => {
        if (isSpiderDragging) {
          isSpiderDragging = false;
          cursorSystem.classList.remove('is-spider-grabbing');
        }
      });
    }

    // Click Web-Pulse Feedback
    window.addEventListener('pointerdown', (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      if (e.target.closest('#spiderman-character')) return;

      const pulse = document.createElement('div');
      pulse.className = 'ar7-click-pulse';
      pulse.style.left = e.clientX + 'px';
      pulse.style.top = e.clientY + 'px';
      document.body.appendChild(pulse);

      pulse.addEventListener('animationend', () => {
        pulse.remove();
      });
      setTimeout(() => {
        if (pulse.parentNode) pulse.remove();
      }, 350);
    });
  }



  const canvas = document.getElementById('hero-particles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let isDarkTheme = document.body.classList.contains('dark-theme');

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        setTimeout(() => {
          isDarkTheme = document.body.classList.contains('dark-theme');
          initParticles(); // Re-init with new colors
        }, 50);
      });
    }

    window.addEventListener('resize', () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      initParticles();
    });

    const mouse = { x: null, y: null, radius: 150 };

    canvas.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    canvas.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor(x, y, directionX, directionY, size) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = isDarkTheme ? 'rgba(0, 240, 255, 0.6)' : 'rgba(112, 0, 255, 0.4)';
        ctx.fill();
      }
      update() {
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 2;
          if (mouse.x > this.x && this.x > this.size * 10) this.x -= 2;
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 2;
          if (mouse.y > this.y && this.y > this.size * 10) this.y -= 2;
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function initParticles() {
      particlesArray = [];
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      let numberOfParticles = (canvas.width * canvas.height) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 2) - 1;
        let directionY = (Math.random() * 2) - 1;
        particlesArray.push(new Particle(x, y, directionX, directionY, size));
      }
    }

    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
            ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - (distance / 15000);
            ctx.strokeStyle = isDarkTheme ? `rgba(255, 0, 124, ${opacityValue * 0.4})` : `rgba(0, 240, 255, ${opacityValue * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    let isParticlesHeroVisible = false;
    let particleAnimId = null;

    function animateParticles() {
      particleAnimId = null;
      if (!isParticlesHeroVisible) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
      particleAnimId = requestAnimationFrame(animateParticles);
    }

    function startParticles() {
      if (!particleAnimId && isParticlesHeroVisible) {
        particleAnimId = requestAnimationFrame(animateParticles);
      }
    }

    function stopParticles() {
      if (particleAnimId) {
        cancelAnimationFrame(particleAnimId);
        particleAnimId = null;
      }
    }

    const heroSection = document.getElementById('hero');
    if (heroSection && 'IntersectionObserver' in window) {
      const particleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isParticlesHeroVisible = entry.isIntersecting;
          if (isParticlesHeroVisible) {
            startParticles();
          } else {
            stopParticles();
          }
        });
      }, { threshold: 0.01 });
      particleObserver.observe(heroSection);
    } else {
      isParticlesHeroVisible = true;
      startParticles();
    }

    setTimeout(() => {
      initParticles();
      if (isParticlesHeroVisible) {
        startParticles();
      }
    }, 100);
  }

  // Custom Select Logic
  const selectWrappers = document.querySelectorAll('.custom-select-wrapper');
  selectWrappers.forEach(wrapper => {
    const trigger = wrapper.querySelector('.custom-select-trigger');
    const options = wrapper.querySelector('.custom-select-options');
    const optionElements = wrapper.querySelectorAll('.custom-option');
    const valueDisplay = wrapper.querySelector('.custom-select-value');
    const hiddenInput = wrapper.querySelector('input[type="hidden"]');

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = options.style.display === 'block';
      document.querySelectorAll('.custom-select-options').forEach(opt => opt.style.display = 'none');
      options.style.display = isOpen ? 'none' : 'block';
    });

    optionElements.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        valueDisplay.textContent = option.textContent;
        hiddenInput.value = option.dataset.value;
        options.style.display = 'none';
        valueDisplay.style.color = 'var(--text-primary)';
      });
    });

    document.addEventListener('click', () => {
      options.style.display = 'none';
    });
  });

  // Initialize Interactive Physics Spider-Man & Web
  initSpidermanPhysics();
});

/* ==========================================================================
   Interactive Spider-Man Hanging Directly from Navbar (AR Logo Area)
   Verlet Integration Multi-Segment Single-Web Physics Simulation
   High Performance Sleep/Wake Engine with Cached Navbar Anchor
   ========================================================================== */
function initSpidermanPhysics() {
  const container = document.getElementById('spiderman-hanging-system');
  const webOutline = document.getElementById('spiderman-web-outline');
  const webSilk = document.getElementById('spiderman-web-silk');
  const character = document.getElementById('spiderman-character');
  const navbar = document.getElementById('navbar');

  if (!container || !webOutline || !webSilk || !character || !navbar) return;

  const NUM_POINTS = 10;
  let points = [];
  let restLength = 135;
  let segmentLength = restLength / (NUM_POINTS - 1);
  let cachedAnchorX = 0;
  let cachedAnchorY = 0;

  // Interaction and velocity tracking
  let isDragging = false;
  let dragOffsetX = 0;
  let dragOffsetY = 0;
  let lastPointerX = 0;
  let lastPointerY = 0;
  let pointerVx = 0;
  let pointerVy = 0;
  let lastMoveTime = performance.now();
  let characterAngle = 0;
  let characterAngularVelocity = 0;
  let idleTime = 0;

  // Sleep / Wake state management
  let isSleeping = false;
  let isSystemVisible = false;
  let physicsAnimId = null;
  let idleFrameCount = 0;

  // Physics constants
  const GRAVITY = 0.42;
  const DAMPING = 0.985;
  const CONSTRAINT_ITERATIONS = 8;
  const ANGULAR_SPRING = 0.09;
  const ANGULAR_DAMPING = 0.86;

  // 1. Navbar Anchor Caching (zero layout thrashing during physics / scrolling)
  function updateNavbarAnchor() {
    const brandEl = navbar.querySelector('.nav-brand') || navbar.querySelector('.brand-link');
    const navRect = navbar.getBoundingClientRect();
    if (brandEl) {
      const brandRect = brandEl.getBoundingClientRect();
      cachedAnchorX = brandRect.left + brandRect.width * 0.5;
      cachedAnchorY = navRect.bottom - 2;
    } else {
      cachedAnchorX = navRect.left + 48;
      cachedAnchorY = navRect.bottom - 2;
    }
  }

  // Expose for navbar state changes
  window.__updateSpidermanAnchor = function() {
    updateNavbarAnchor();
    if (points.length > 0) {
      points[0].x = cachedAnchorX;
      points[0].y = cachedAnchorY;
    }
    wakePhysics();
  };

  function updateDimensions() {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    if (window.innerWidth < 480) {
      restLength = 65;
    } else if (isMobile) {
      restLength = 80;
    } else if (isTablet) {
      restLength = 115;
    } else {
      restLength = 135;
    }
    segmentLength = restLength / (NUM_POINTS - 1);

    updateNavbarAnchor();

    if (points.length !== NUM_POINTS) {
      points = [];
      for (let i = 0; i < NUM_POINTS; i++) {
        const y = cachedAnchorY + i * segmentLength;
        const x = cachedAnchorX;
        points.push({
          x: x,
          y: y,
          oldX: x,
          oldY: y,
          isPinned: i === 0
        });
      }
    } else {
      points[0].x = cachedAnchorX;
      points[0].y = cachedAnchorY;
    }

    // Position character underneath the AR logo
    const endPoint = points[points.length - 1];
    character.style.transform = `translate3d(${endPoint.x}px, ${endPoint.y}px, 0) translate(-50%, 0) rotate(0deg)`;
    character.style.opacity = '1';

    const pathD = generateWebPath(points);
    if (webOutline) webOutline.setAttribute('d', pathD);
    if (webSilk) webSilk.setAttribute('d', pathD);

    wakePhysics();
  }

  updateDimensions();
  window.addEventListener('resize', updateDimensions, { passive: true });
  window.addEventListener('orientationchange', updateDimensions, { passive: true });

  // Generate single continuous smooth spline path
  function generateWebPath(pts) {
    if (pts.length < 2) return '';
    let pathD = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
    for (let i = 1; i < pts.length - 1; i++) {
      const xc = (pts[i].x + pts[i + 1].x) / 2;
      const yc = (pts[i].y + pts[i + 1].y) / 2;
      pathD += ` Q ${pts[i].x.toFixed(1)} ${pts[i].y.toFixed(1)}, ${xc.toFixed(1)} ${yc.toFixed(1)}`;
    }
    const last = pts[pts.length - 1];
    pathD += ` L ${last.x.toFixed(1)} ${last.y.toFixed(1)}`;
    return pathD;
  }

  // 2. Wake Physics Engine (Active across entire page)
  function wakePhysics() {
    idleFrameCount = 0;
    isSleeping = false;
    isSystemVisible = true;
    if (!physicsAnimId) {
      lastMoveTime = performance.now();
      physicsAnimId = requestAnimationFrame(physicsStep);
    }
  }

  // 3. Pointer drag handling (Functions on any page section)
  function onPointerDown(e) {
    if (e.button !== undefined && e.button !== 0) return;
    
    // Prevent accidental mobile page scroll during character drag
    if (e.cancelable) e.preventDefault();

    wakePhysics();
    isDragging = true;
    character.classList.add('is-dragging');

    const endPoint = points[points.length - 1];
    dragOffsetX = endPoint.x - e.clientX;
    dragOffsetY = endPoint.y - e.clientY;

    lastPointerX = e.clientX;
    lastPointerY = e.clientY;
    pointerVx = 0;
    pointerVy = 0;
    lastMoveTime = performance.now();

    try {
      character.setPointerCapture(e.pointerId);
    } catch (err) {}
  }

  function onPointerMove(e) {
    if (!isDragging) return;

    if (e.cancelable) e.preventDefault();

    const now = performance.now();
    const dt = Math.max(8, now - lastMoveTime);

    const vx = ((e.clientX - lastPointerX) / dt) * 16.67;
    const vy = ((e.clientY - lastPointerY) / dt) * 16.67;
    pointerVx = pointerVx * 0.35 + vx * 0.65;
    pointerVy = pointerVy * 0.35 + vy * 0.65;

    lastPointerX = e.clientX;
    lastPointerY = e.clientY;
    lastMoveTime = now;

    const targetX = e.clientX + dragOffsetX;
    const targetY = Math.max(cachedAnchorY + 25, e.clientY + dragOffsetY);

    const endPoint = points[points.length - 1];
    endPoint.x = targetX;
    endPoint.y = targetY;
    endPoint.oldX = targetX - pointerVx * 0.45;
    endPoint.oldY = targetY - pointerVy * 0.45;
  }

  function onPointerUp(e) {
    if (!isDragging) return;
    isDragging = false;
    character.classList.remove('is-dragging');

    try {
      character.releasePointerCapture(e.pointerId);
    } catch (err) {}

    const clampedVx = Math.max(-28, Math.min(28, pointerVx * 1.15));
    const clampedVy = Math.max(-24, Math.min(28, pointerVy * 1.15));

    const endPoint = points[points.length - 1];
    endPoint.oldX = endPoint.x - clampedVx;
    endPoint.oldY = endPoint.y - clampedVy;

    for (let i = 1; i < points.length - 1; i++) {
      const factor = i / points.length;
      points[i].oldX = points[i].x - clampedVx * factor * 0.75;
      points[i].oldY = points[i].y - clampedVy * factor * 0.75;
    }

    wakePhysics();
  }

  character.addEventListener('pointerdown', onPointerDown);
  character.addEventListener('mouseenter', wakePhysics);
  window.addEventListener('pointermove', onPointerMove, { passive: false });
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerUp);

  // 4. Physics Simulation Step & Sleep Detector
  function physicsStep() {
    physicsAnimId = null;
    if (!isSystemVisible && !isDragging) return;

    idleTime += 0.022;

    // Fixed anchor from cache
    points[0].x = cachedAnchorX;
    points[0].y = cachedAnchorY;

    // 1. Verlet Integration
    let maxDisplacement = 0;

    for (let i = 1; i < NUM_POINTS; i++) {
      const p = points[i];
      if (p.isPinned) continue;
      if (isDragging && i === NUM_POINTS - 1) continue;

      let vx = (p.x - p.oldX) * DAMPING;
      let vy = (p.y - p.oldY) * DAMPING;

      // Subtle ambient sway only while awake and not dragging
      if (!isDragging && idleFrameCount < 15) {
        const ambientSway = Math.sin(idleTime * 1.4 + i * 0.25) * 0.04 * (i / NUM_POINTS);
        vx += ambientSway;
      }

      p.oldX = p.x;
      p.oldY = p.y;
      p.x += vx;
      p.y += vy + GRAVITY;

      const disp = Math.abs(vx) + Math.abs(vy);
      if (disp > maxDisplacement) maxDisplacement = disp;
    }

    // 2. Constraint Relaxation
    for (let iter = 0; iter < CONSTRAINT_ITERATIONS; iter++) {
      for (let i = 0; i < NUM_POINTS - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];

        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;
        const diff = (dist - segmentLength) / dist;

        if (p1.isPinned) {
          if (!p2.isPinned && !(isDragging && i + 1 === NUM_POINTS - 1)) {
            p2.x -= dx * diff;
            p2.y -= dy * diff;
          }
        } else if (p2.isPinned || (isDragging && i + 1 === NUM_POINTS - 1)) {
          p1.x += dx * diff;
          p1.y += dy * diff;
        } else {
          p1.x += dx * 0.5 * diff;
          p1.y += dy * 0.5 * diff;
          p2.x -= dx * 0.5 * diff;
          p2.y -= dy * 0.5 * diff;
        }
      }
    }

    // 3. Render single continuous web line
    const pathD = generateWebPath(points);
    webOutline.setAttribute('d', pathD);
    webSilk.setAttribute('d', pathD);

    // 4. Update Spider-Man Transform & Orientation
    const endPoint = points[NUM_POINTS - 1];
    const prevPoint = points[NUM_POINTS - 2];
    const p3 = points[NUM_POINTS - 3] || prevPoint;

    const dx = endPoint.x - (prevPoint.x * 0.65 + p3.x * 0.35);
    const dy = endPoint.y - (prevPoint.y * 0.65 + p3.y * 0.35);
    const targetAngle = Math.atan2(dx, Math.max(5, dy)) * (180 / Math.PI);

    const angleDiff = -targetAngle - characterAngle;
    characterAngularVelocity += angleDiff * ANGULAR_SPRING;
    characterAngularVelocity *= ANGULAR_DAMPING;
    characterAngle += characterAngularVelocity;

    character.style.transform = `translate3d(${endPoint.x}px, ${endPoint.y}px, 0) translate(-50%, 0) rotate(${characterAngle.toFixed(2)}deg)`;

    // 5. Sleep evaluation (sleeps when quiet, wakes on any interaction)
    if (!isDragging && maxDisplacement < 0.06 && Math.abs(characterAngularVelocity) < 0.03) {
      idleFrameCount++;
      if (idleFrameCount > 30) {
        isSleeping = true;
        physicsAnimId = null;
        return; // Enter sleep state, stopping RAF loop cleanly
      }
    } else {
      idleFrameCount = 0;
    }

    physicsAnimId = requestAnimationFrame(physicsStep);
  }

  // 5. Spider-Man Viewport Visibility Observer (Container/Character specific, independent of Hero)
  const spidermanObserverTarget = document.getElementById('spiderman-hanging-system') || character;
  if (spidermanObserverTarget && 'IntersectionObserver' in window) {
    const spidermanObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isSystemVisible = entry.isIntersecting;
        if (isSystemVisible) {
          wakePhysics();
        } else {
          if (physicsAnimId && !isDragging) {
            cancelAnimationFrame(physicsAnimId);
            physicsAnimId = null;
          }
        }
      });
    }, { threshold: 0.01 });
    spidermanObserver.observe(spidermanObserverTarget);
  } else {
    isSystemVisible = true;
    wakePhysics();
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (physicsAnimId && !isDragging) {
        cancelAnimationFrame(physicsAnimId);
        physicsAnimId = null;
      }
    } else {
      wakePhysics();
    }
  });
}
