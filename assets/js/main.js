/**
 * HELP AUTISM PAKISTAN — OFFICIAL PRODUCTION INTERACTION SCRIPT
 * A project of A&S Welfare Society
 * 
 * MODULES:
 * 1. Safe Initialization & DOM Ready
 * 2. Sticky Header Scroll Effect
 * 3. Desktop Dropdowns (Accessible Click, Focus, ESC key)
 * 4. Mobile Drawer Navigation (Open, Close, Overlay, ESC key, Scroll Lock)
 * 5. Hero 3D Medallion Parallax (Calm, Reduced Amplitude, Accessibility Guard)
 * 6. Interactive 3D Service Cards Tilt (Perspective, Max 5deg)
 * 7. Animated Stat Counters (IntersectionObserver)
 * 8. Scroll-Reveal Observer
 * 9. Production-Safe Consultation Form (Validation, Honeypot, Dual-Submit WhatsApp)
 * 10. Image Error Fallback Handler
 */

(function () {
  'use strict';

  // Ensure JS active indicator
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
      initConsultationForms,
      initImageFallbacks,
      initFloatingActionsSmartDodge,
      initVideoGallerySwitcher
    ];

    modules.forEach(fn => {
      try {
        fn();
      } catch (err) {
        console.warn('HELP Autism init notice in ' + fn.name + ':', err);
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

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 25) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* -------------------------------------------------------------------------
     3. DESKTOP DROPDOWNS (Click, Focus, Outside Click, ESC key)
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

        // Toggle current dropdown
        if (isOpen) {
          container.classList.remove('dropdown-open');
          toggleBtn.setAttribute('aria-expanded', 'false');
        } else {
          container.classList.add('dropdown-open');
          toggleBtn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Close on click outside
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
      document.body.style.overflow = 'hidden'; // Body scroll lock
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

    // Close drawer when any internal navigation link is clicked
    const drawerLinks = drawer.querySelectorAll('a:not([target="_blank"])');
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  /* -------------------------------------------------------------------------
     5. HERO 3D MEDALLION PARALLAX (CALM, GENTLE TILT)
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

      // Gentle maximum tilt ~6 degrees for professional healthcare aesthetic
      targetY = (x / (rect.width / 2)) * 6;
      targetX = -(y / (rect.height / 2)) * 6;

      if (!rafId) {
        rafId = requestAnimationFrame(updateTilt);
      }
    };

    const updateTilt = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      medallion.style.setProperty('--tilt-x', `${currentX.toFixed(2)}deg`);
      medallion.style.setProperty('--tilt-y', `${currentY.toFixed(2)}deg`);

      if (Math.abs(targetX - currentX) > 0.02 || Math.abs(targetY - currentY) > 0.02) {
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
    cards.forEach(card => {
      let isHovered = false;

      card.addEventListener('pointerenter', () => {
        isHovered = true;
      });

      card.addEventListener('pointermove', (e) => {
        if (!isHovered) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -((y - centerY) / centerY) * 4;
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      }, { passive: true });

      card.addEventListener('pointerleave', () => {
        isHovered = false;
        card.style.transform = '';
      });
    });
  }

  /* -------------------------------------------------------------------------
     7. ANIMATED STAT COUNTERS
     ------------------------------------------------------------------------- */
  function initStatCounters() {
    const counterElements = document.querySelectorAll('.stat-number[data-counter]');
    if (!counterElements.length) return;

    const animateCounter = (el) => {
      const target = parseInt(el.getAttribute('data-counter'), 10);
      if (isNaN(target)) return;

      const duration = 1400;
      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeOut * target);

        el.textContent = currentVal.toString();

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target.toString();
        }
      };

      requestAnimationFrame(step);
    };

    if ('IntersectionObserver' in window && !prefersReducedMotion) {
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
      counterElements.forEach(el => {
        el.textContent = el.getAttribute('data-counter') || el.textContent;
      });
    }
  }

  /* -------------------------------------------------------------------------
     8. SCROLL-REVEAL OBSERVER
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
      rootMargin: '80px 0px 40px 0px',
      threshold: 0.02
    });

    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      const winHeight = window.innerHeight || document.documentElement.clientHeight || 800;
      if (rect.top <= winHeight + 120) {
        revealEl(el);
      } else {
        observer.observe(el);
      }
    });

    // Safety fallback
    setTimeout(() => {
      reveals.forEach(revealEl);
    }, 1200);
  }

  /* -------------------------------------------------------------------------
     9. PRODUCTION-SAFE CONSULTATION FORM HANDLER
     ------------------------------------------------------------------------- */
  function initConsultationForms() {
    const forms = document.querySelectorAll('.consultation-form');
    if (!forms.length) return;

    // Production Endpoint Configuration
    // To connect a live backend (Express / Firebase / Formspree / SendGrid):
    // Set `window.HELP_FORM_ENDPOINT = 'https://api.yourdomain.com/consultations'` in an external script or .env.
    const FORM_ENDPOINT = window.HELP_FORM_ENDPOINT || null;

    forms.forEach(form => {
      const nameInput = form.querySelector('[name="name"]');
      const phoneInput = form.querySelector('[name="phone"]');
      const ageInput = form.querySelector('[name="age"]');
      const serviceInput = form.querySelector('[name="service"]');
      const notesInput = form.querySelector('[name="notes"]');
      const honeypot = form.querySelector('[name="_gotcha"]');
      const submitBtn = form.querySelector('.submit-btn');
      const feedbackBox = form.querySelector('.form-feedback-box');
      const whatsappBtn = form.querySelector('.whatsapp-prefill-btn');

      // Helper: set field error
      const setFieldError = (input, msg) => {
        if (!input) return;
        input.classList.add('is-invalid');
        const parent = input.closest('.form-group');
        if (parent) {
          let errSpan = parent.querySelector('.field-error-msg');
          if (!errSpan) {
            errSpan = document.createElement('span');
            errSpan.className = 'field-error-msg';
            parent.appendChild(errSpan);
          }
          errSpan.textContent = msg;
        }
      };

      // Helper: clear field error
      const clearFieldError = (input) => {
        if (!input) return;
        input.classList.remove('is-invalid');
        const parent = input.closest('.form-group');
        if (parent) {
          const errSpan = parent.querySelector('.field-error-msg');
          if (errSpan) errSpan.textContent = '';
        }
      };

      // Realtime validation cleanup on input
      [nameInput, phoneInput, ageInput].forEach(inp => {
        if (inp) {
          inp.addEventListener('input', () => clearFieldError(inp));
        }
      });

      // WhatsApp Quick Action button (formats entered data into courteous message)
      if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
          const parentName = nameInput?.value.trim() || 'Parent';
          const childAge = ageInput?.value.trim() || 'Not specified';
          const service = serviceInput?.value || 'Consultation Assessment';
          const notes = notesInput?.value.trim() || 'I would like to inquire regarding clinical consultation.';

          const text = 
            `Hello Dr. Aniqa Sohail & HELP Autism Pakistan Team,\n\n` +
            `I would like to inquire about a clinical consultation.\n` +
            `• Parent Name: ${parentName}\n` +
            `• Child's Age: ${childAge}\n` +
            `• Service of Interest: ${service}\n` +
            `• Concerns / Notes: ${notes}\n\n` +
            `Please let me know how to schedule our appointment in Lahore. Thank you!`;

          const encoded = encodeURIComponent(text);
          window.open(`https://wa.me/923444040074?text=${encoded}`, '_blank');
        });
      }

      // Main Form Submit Handler
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // 1. Spam honeypot check
        if (honeypot && honeypot.value.trim() !== '') {
          console.warn('Spam submission detected by honeypot.');
          return;
        }

        // 2. Client-side field validation
        let isValid = true;

        const nameVal = nameInput ? nameInput.value.trim() : '';
        if (!nameVal || nameVal.length < 2) {
          setFieldError(nameInput, 'Please provide the parent or guardian full name.');
          isValid = false;
        } else {
          clearFieldError(nameInput);
        }

        const phoneVal = phoneInput ? phoneInput.value.trim() : '';
        const phoneDigits = phoneVal.replace(/[^0-9]/g, '');
        if (!phoneVal || phoneDigits.length < 9) {
          setFieldError(phoneInput, 'Please provide a valid phone or WhatsApp number (min 9 digits).');
          isValid = false;
        } else {
          clearFieldError(phoneInput);
        }

        const ageVal = ageInput ? ageInput.value.trim() : '';
        if (!ageVal) {
          setFieldError(ageInput, 'Please provide your child\'s age.');
          isValid = false;
        } else {
          clearFieldError(ageInput);
        }

        if (!isValid) {
          if (feedbackBox) {
            feedbackBox.style.display = 'block';
            feedbackBox.className = 'form-feedback-box form-error-alert';
            feedbackBox.textContent = 'Please correct the highlighted fields above.';
          }
          return;
        }

        // 3. UI Loading State
        if (submitBtn) {
          submitBtn.disabled = true;
          const btnText = submitBtn.querySelector('.btn-text');
          const btnSpinner = submitBtn.querySelector('.btn-spinner');
          if (btnText) btnText.style.display = 'none';
          if (btnSpinner) btnSpinner.style.display = 'inline-block';
        }

        const payload = {
          name: nameVal,
          phone: phoneVal,
          age: ageVal,
          service: serviceInput?.value || 'Consultation',
          notes: notesInput?.value.trim() || '',
          timestamp: new Date().toISOString(),
          sourceUrl: window.location.href
        };

        try {
          if (FORM_ENDPOINT) {
            // Live Server Endpoint POST
            const res = await fetch(FORM_ENDPOINT, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            });

            if (!res.ok) throw new Error('Server returned ' + res.status);

            // Live Production Success State
            form.reset();
            if (feedbackBox) {
              feedbackBox.style.display = 'block';
              feedbackBox.className = 'form-feedback-box form-success-alert';
              feedbackBox.innerHTML = `
                <strong>Thank you, ${nameVal}!</strong><br>
                Your consultation request has been successfully transmitted to our clinical intake coordinators in Model Town Extension, Lahore. We will contact you at <strong>${phoneVal}</strong>.<br>
                <div style="margin-top: 0.75rem;">
                  <a href="https://wa.me/923444040074?text=${encodeURIComponent('Hello HELP Autism Pakistan, I just submitted an intake form on the website for ' + nameVal + '.')}" target="_blank" rel="noopener noreferrer" style="color: var(--color-green-deep); font-weight: 700; text-decoration: underline;">
                    Click here to confirm directly on WhatsApp &rarr;
                  </a>
                </div>
              `;
            }
          } else {
            // Staging / Demo Environment (No live backend endpoint configured)
            try {
              const existing = JSON.parse(localStorage.getItem('help_consultations') || '[]');
              existing.push(payload);
              localStorage.setItem('help_consultations', JSON.stringify(existing));
            } catch {}
            // Simulate natural latency
            await new Promise(r => setTimeout(r, 500));

            form.reset();
            if (feedbackBox) {
              feedbackBox.style.display = 'block';
              feedbackBox.className = 'form-feedback-box form-info-alert';
              const serviceVal = serviceInput?.value || 'Consultation';
              const notesVal = notesInput?.value.trim() || '';
              feedbackBox.innerHTML = `
                <strong>Staging / Demo Mode Notice:</strong><br>
                Your consultation inquiry for <strong>${nameVal}</strong> has been validated and saved locally in your browser storage.<br>
                <div style="margin-top: 0.45rem; font-size: 0.88rem; opacity: 0.95;">
                  <em>Notice: A production backend API endpoint (<code>window.HELP_FORM_ENDPOINT</code>) has not yet been connected to this website, so this inquiry has not been transmitted to the clinic.</em>
                </div>
                <div style="margin-top: 0.85rem; padding-top: 0.75rem; border-top: 1px solid rgba(8,36,63,0.15);">
                  <strong>To reach Dr. Aniqa Sohail and our clinical team directly right now:</strong><br>
                  <a href="https://wa.me/923444040074?text=${encodeURIComponent('Hello Dr. Aniqa Sohail & HELP Autism Pakistan Team, I would like to book a clinical consultation for ' + nameVal + ' (Child Age: ' + ageVal + '). Service: ' + serviceVal + (notesVal ? '. Notes: ' + notesVal : '') + '.')}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-accent" style="margin-top: 0.6rem; display: inline-flex; align-items: center; gap: 0.45rem;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"/></svg>
                    Send Request Directly on WhatsApp &rarr;
                  </a>
                </div>
              `;
            }
          }
        } catch (error) {
          console.error('Consultation form error:', error);
          if (feedbackBox) {
            feedbackBox.style.display = 'block';
            feedbackBox.className = 'form-feedback-box form-error-alert';
            feedbackBox.innerHTML = `
              We encountered a transmission issue. You can reach our clinic directly right now on WhatsApp at <a href="https://wa.me/923444040074" target="_blank" style="text-decoration: underline; font-weight: 700;">+92 344 404 0074</a>.
            `;
          }
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            const btnText = submitBtn.querySelector('.btn-text');
            const btnSpinner = submitBtn.querySelector('.btn-spinner');
            if (btnText) btnText.style.display = 'inline-block';
            if (btnSpinner) btnSpinner.style.display = 'none';
          }
        }
      });
    });
  }

  /* -------------------------------------------------------------------------
     10. IMAGE ERROR FALLBACK HANDLER
     ------------------------------------------------------------------------- */
  function initImageFallbacks() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('error', function () {
        if (!this.getAttribute('data-error-handled')) {
          this.setAttribute('data-error-handled', 'true');
          // If fallback panel exists, display it; else fallback to brand logo
          const fallback = this.nextElementSibling;
          if (fallback && fallback.classList.contains('img-fallback-panel')) {
            this.style.display = 'none';
            fallback.style.display = 'flex';
          } else {
            this.src = 'assets/img/logo.png';
            this.style.objectFit = 'contain';
          }
        }
      });
    });
  }

  /* -------------------------------------------------------------------------
     11. FLOATING ACTIONS SMART DODGE
     Prevents round WhatsApp/Call buttons from overlapping form submit buttons
     or keyboard on mobile viewports.
     ------------------------------------------------------------------------- */
  function initFloatingActionsSmartDodge() {
    const fabContainer = document.querySelector('.floating-actions');
    if (!fabContainer) return;

    // 1. Hide immediately when on-screen virtual keyboard is active
    document.addEventListener('focusin', (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
        fabContainer.classList.add('keyboard-open');
      }
    });

    document.addEventListener('focusout', (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
        fabContainer.classList.remove('keyboard-open');
      }
    });

    // 2. Hide when user scrolls to any consultation form, contact card, or submit button
    const formTargets = document.querySelectorAll(
      '.contact-card, .consultation-form, #consultation, .form-actions-stack'
    );

    if (formTargets.length > 0 && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        const isNearForm = entries.some(entry => entry.isIntersecting);
        if (isNearForm) {
          fabContainer.classList.add('hidden-on-form');
        } else {
          fabContainer.classList.remove('hidden-on-form');
        }
      }, {
        threshold: 0.08,
        rootMargin: '40px 0px -40px 0px'
      });

      formTargets.forEach(target => observer.observe(target));
    }
  }

  /* -------------------------------------------------------------------------
     12. VIDEO GALLERY SWITCHER
     Allows switching videos inside the responsive YouTube embed
     ------------------------------------------------------------------------- */
  function initVideoGallerySwitcher() {
    const cards = document.querySelectorAll('.video-selectable-card');
    const iframe = document.getElementById('main-video-player-frame');
    const titleEl = document.getElementById('active-video-title');
    const ytLinkEl = document.getElementById('active-yt-link');

    if (!iframe || cards.length === 0) return;

    cards.forEach(card => {
      const activate = () => {
        const videoId = card.getAttribute('data-video-id');
        const title = card.getAttribute('data-title');
        const url = card.getAttribute('data-url') || ('https://www.youtube.com/watch?v=' + videoId);

        if (!videoId) return;

        // Update iframe source with privacy and autoplay
        iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0';
        iframe.title = title + ' - HELP Autism Pakistan';

        // Update title and YouTube link
        if (titleEl && title) titleEl.textContent = title;
        if (ytLinkEl) ytLinkEl.href = url;

        // Update active class
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        // Smooth scroll to player if needed
        const player = document.getElementById('embedded-video-player');
        if (player) {
          player.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      };

      card.addEventListener('click', activate);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate();
        }
      });
    });
  }

})();
