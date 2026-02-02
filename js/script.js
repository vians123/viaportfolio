(function () {
  'use strict';

  function init() {
    // Year in footer
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Hero: reveal immediately so it's never stuck invisible
    var heroContent = document.querySelector('.hero .animate-on-scroll');
    if (heroContent) heroContent.classList.add('visible');

    // Scroll-triggered animations – trigger when 5% of element is in view
    var observerOptions = {
      root: null,
      rootMargin: '0px 0px -30px 0px',
      threshold: 0.05
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Header hide on scroll down, show on scroll up
  let lastScrollY = window.scrollY;
  const header = document.querySelector('.header');

  window.addEventListener('scroll', function () {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 80) {
      if (currentScrollY > lastScrollY) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
    } else {
      header.classList.remove('hidden');
    }
    lastScrollY = currentScrollY;
  }, { passive: true });

  // Mobile menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Optional: cursor glow follow (lightweight)
  const cursorGlow = document.querySelector('.cursor-glow');
  if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
    var glowX = 0;
    var glowY = 0;
    var glowTargetX = 0;
    var glowTargetY = 0;

    document.addEventListener('mousemove', function (e) {
      glowTargetX = e.clientX;
      glowTargetY = e.clientY;
    });

    function glowAnimate() {
      glowX += (glowTargetX - glowX) * 0.08;
      glowY += (glowTargetY - glowY) * 0.08;
      cursorGlow.style.left = glowX + 'px';
      cursorGlow.style.top = glowY + 'px';
      requestAnimationFrame(glowAnimate);
    }
    glowAnimate();
  }
})();
