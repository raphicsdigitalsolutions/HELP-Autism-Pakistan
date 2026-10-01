/**
 * HELP AUTISM PAKISTAN — OFFICIAL INTERACTION SCRIPT
 * A project of A&S Welfare Society
 * 
 * SECTION BREAKDOWN:
 * 1. Safe Initialization & DOM Ready
 * 2. Sticky Header Scroll Effect
 * 3. Desktop Dropdowns (Click, Outside Click, ESC key)
 * 4. Mobile Drawer Navigation (Open, Close, ESC key)
 * 5. Hero 3D Medallion Parallax Tilt (Pointer Move)
 * 6. Interactive 3D Service Cards Tilt (Perspective, Max 9deg)
 * 7. Animated Stat Counters (IntersectionObserver)
 * 8. Scroll-Reveal Intersection Observer
 * 9. Working Contact Form (Mailto prefill with encoded message)
 * 10. Image Error Fallback Handler
 */

(function () {
  'use strict';

  // Ensure JS class is applied to html element
  document.documentElement.classList.add('js');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = window.matchMedia('(hover: none)').matches;

  const onReady = () => {
    const modules = [
      initStickyHeader,
      initDesktopDropdowns,
      initMobileDrawer,
      initHeroMedallionTilt,
      initServiceCardsTilt,
      initStatCounters,
      initScrollReveal,
      initContactForm,
      initImageFallbacks
    ];
    modules.forEach(fn => {
      try {
        fn();
      } catch (err) {
        console.warn('Initialization notice:', fn.name, err);
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }

  /* -------------------------------------------------------------------------
     2. STICKY HEADER SCROLL EFFECT
     ------------------------------------------------------------------------- */
  function initStickyHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* -------------------------------------------------------------------------
     3. DESKTOP DROPDOWNS (Click, Outside Click, ESC key)
     ------------------------------------------------------------------------- */
  function initDesktopDropdowns() {
    const dropdownContainers = document.querySelectorAll('.nav-item.has-dropdown');
    if (!dropdownContainers.length) return;

    dropdownContainers.forEach(container => {
      const toggleBtn = container.querySelector('.dropdown-toggle');
      if (!toggleBtn) return;

      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const isOpen = container.classList.contains('dropdown-open');

        // Close all other open dropdowns first
        dropdownContainers.forEach(c => {
          if (c !== container) {
            c.classList.remove('dropdown-open');
            const btn = c.querySelector('.dropdown-toggle');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle this dropdown
        if (isOpen) {
          container.classList.remove('dropdown-open');
          toggleBtn.setAttribute('aria-expanded', 'false');
        } else {
          container.classList.add('dropdown-open');
          toggleBtn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      dropdownContainers.forEach(container => {
        if (!container.contains(e.target)) {
          container.classList.remove('dropdown-open');
          const btn = container.querySelector('.dropdown-toggle');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdownContainers.forEach(container => {
          container.classList.remove('dropdown-open');
          const btn = container.querySelector('.dropdown-toggle');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
      }
    });
  }

  /* -------------------------------------------------------------------------
     4. MOBILE DRAWER NAVIGATION
     ------------------------------------------------------------------------- */
  function initMobileDrawer() {
    const toggleBtn = document.getElementById('mobile-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const closeBtn = document.getElementById('drawer-close');
    const overlay = document.getElementById('mobile-drawer-overlay');

    if (!toggleBtn || !drawer) return;

    const openDrawer = () => {
      drawer.classList.add('open');
      if (overlay) overlay.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      drawer.classList.remove('open');
      if (overlay) overlay.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    if (overlay) {
      overlay.addEventListener('click', closeDrawer);
    }

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (drawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeDrawer);
    }

    // Close on clicking outside drawer content
    document.addEventListener('click', (e) => {
      if (drawer.classList.contains('open') && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
        closeDrawer();
      }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  /* -------------------------------------------------------------------------
     5. HERO 3D MEDALLION PARALLAX TILT
     ------------------------------------------------------------------------- */
  function initHeroMedallionTilt() {
    if (prefersReducedMotion || isTouchDevice) return;

    const stage = document.querySelector('.hero-visual-stage');
    const medallion = document.querySelector('.medallion-container');
    if (!stage || !medallion) return;

    let rafId = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onPointerMove = (e) => {
      const rect = stage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Max tilt ~14 degrees
      targetY = (x / (rect.width / 2)) * 14;
      targetX = -(y / (rect.height / 2)) * 14;

      if (!rafId) {
        rafId = requestAnimationFrame(updateTilt);
      }
    };

    const updateTilt = () => {
      // Smooth lerp
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      medallion.style.setProperty('--tilt-x', `${currentX.toFixed(2)}deg`);
      medallion.style.setProperty('--tilt-y', `${currentY.toFixed(2)}deg`);

      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        rafId = requestAnimationFrame(updateTilt);
      } else {
        rafId = null;
      }
    };

    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
      if (!rafId) {
        rafId = requestAnimationFrame(updateTilt);
      }
    };

    stage.addEventListener('pointermove', onPointerMove, { passive: true });
    stage.addEventListener('pointerleave', onPointerLeave, { passive: true });
  }

  /* -------------------------------------------------------------------------
     6. INTERACTIVE 3D SERVICE CARDS TILT
     ------------------------------------------------------------------------- */
  function initServiceCardsTilt() {
    if (prefersReducedMotion || isTouchDevice) return;

    const cards = document.querySelectorAll('.service-tilt-card');
    if (!cards.length) return;

    cards.forEach(card => {
      let isHovered = false;

      card.addEventListener('pointermove', (e) => {
        if (!isHovered) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Max ~9 degree tilt
        const rotY = (x / (rect.width / 2)) * 8.5;
        const rotX = -(y / (rect.height / 2)) * 8.5;

        card.style.setProperty('--card-rx', `${rotX.toFixed(2)}deg`);
        card.style.setProperty('--card-ry', `${rotY.toFixed(2)}deg`);
      }, { passive: true });

      card.addEventListener('pointerenter', () => {
        isHovered = true;
      });

      card.addEventListener('pointerleave', () => {
        isHovered = false;
        card.style.setProperty('--card-rx', '0deg');
        card.style.setProperty('--card-ry', '0deg');
      });
    });
  }

  /* -------------------------------------------------------------------------
     7. ANIMATED STAT COUNTERS
     ------------------------------------------------------------------------- */
  function initStatCounters() {
    const counterElements = document.querySelectorAll('[data-counter]');
    if (!counterElements.length) return;

    const animateCounter = (el) => {
      const target = parseInt(el.getAttribute('data-counter'), 10);
      if (isNaN(target)) return;

      const duration = 1400; // ms
      const startTime = performance.now();

      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        // Ease out quad
        const easeOut = 1 - (1 - progress) * (1 - progress);
        const current = Math.floor(easeOut * target);

        el.textContent = current;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      };

      requestAnimationFrame(step);
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      counterElements.forEach(el => observer.observe(el));
    } else {
      counterElements.forEach(el => animateCounter(el));
    }
  }

  /* -------------------------------------------------------------------------
     8. SCROLL-REVEAL INTERSECTION OBSERVER
     ------------------------------------------------------------------------- */
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const revealEl = (el) => {
      el.classList.add('revealed', 'active');
    };

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      reveals.forEach(revealEl);
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealEl(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '100px 0px 50px 0px',
      threshold: 0.02
    });

    reveals.forEach(el => {
      // Immediately reveal elements that are already within or near initial viewport
      const rect = el.getBoundingClientRect();
      const winHeight = window.innerHeight || document.documentElement.clientHeight || 800;
      if (rect.top <= winHeight + 150) {
        revealEl(el);
      } else {
        observer.observe(el);
      }
    });

    // Safety fallback: reveal all elements so content is never stuck hidden
    setTimeout(() => {
      reveals.forEach(revealEl);
    }, 1200);
  }

  /* -------------------------------------------------------------------------
     9. WORKING CONTACT FORM (MAILTO PREFILL)
     ------------------------------------------------------------------------- */
  function initContactForm() {
    const form = document.getElementById('consultation-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('[name="name"]')?.value || 'Parent/Visitor';
      const phone = form.querySelector('[name="phone"]')?.value || 'Not provided';
      const email = form.querySelector('[name="email"]')?.value || 'Not provided';
      const service = form.querySelector('[name="service"]')?.value || 'General Consultation';
      const message = form.querySelector('[name="message"]')?.value || 'Inquiry regarding therapy & training programs.';

      const subject = encodeURIComponent(`Consultation Inquiry: ${name} (${service})`);
      const body = encodeURIComponent(
        `Dear Dr. Aniqa Sohail & HELP Autism Pakistan Team,\n\n` +
        `I would like to inquire regarding a consultation/program.\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email}\n` +
        `Service / Program of Interest: ${service}\n\n` +
        `Details / Message:\n${message}\n\n` +
        `Best regards,\n${name}`
      );

      // Open mailto link
      window.location.href = `mailto:aniqasohail@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  /* -------------------------------------------------------------------------
     10. IMAGE ERROR FALLBACK HANDLER
     ------------------------------------------------------------------------- */
  function initImageFallbacks() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('error', function () {
        this.style.display = 'none';
        const fallback = this.nextElementSibling;
        if (fallback && fallback.classList.contains('img-fallback-panel')) {
          fallback.style.display = 'flex';
        }
      });
    });
  }

})();
