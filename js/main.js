/* =============================================================================
   QUILL LABS STUDIO — UNIFIED RUNTIME SCRIPT
   Provides: Boot Preloader + Staggered Card Reveals + Modals
   ============================================================================= */

// --- 1. ACE Academy Signature Boot Preloader Screen ---
(function() {
  const statusEl = document.getElementById("preloader-status");

  window.dismissPreloader = function() {
    const preloader = document.getElementById("preloader");
    if (preloader && !preloader.classList.contains("preloader-hidden")) {
      preloader.classList.add("preloader-hidden");
      setTimeout(() => {
        preloader.style.display = "none";
        initCardEntrance();
      }, 400);
    }
  };

  // Keep the decorative intro from delaying access to the page.
  window.addEventListener("DOMContentLoaded", () => {
    if (statusEl) statusEl.textContent = "System engine ready.";
    requestAnimationFrame(window.dismissPreloader);
  }, { once: true });

  window.addEventListener("load", () => {
    window.dismissPreloader();
  });

  setTimeout(window.dismissPreloader, 1500);

  // Instant skip on any interaction
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
      window.dismissPreloader();
    }
  });
})();

// --- 2. ACE Academy Tactile Card Pop Entrance with Staggered Delays ---
function initCardEntrance() {
  const cards = document.querySelectorAll('.card-enter');
  if (!cards.length) return;

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cards.forEach(c => c.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const parent = card.parentElement;
        const siblings = parent ? Array.from(parent.querySelectorAll('.card-enter')) : [];
        const idx = Math.max(0, siblings.indexOf(card));
        const delay = (idx % 6) * 75;

        setTimeout(() => {
          card.classList.add('in-view');
        }, delay);

        observer.unobserve(card);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 40px 0px' });

  cards.forEach(card => observer.observe(card));
}

function initHeroPhraseRotation() {
  const rotator = document.getElementById('hero-phrase-rotator');
  if (!rotator) return;

  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const phrases = Array.from(rotator.querySelectorAll('.hero-phrase'));
  let activeIndex = phrases.findIndex(phrase => phrase.classList.contains('is-active'));
  if (activeIndex < 0 || phrases.length < 2) return;

  let rotationTimeout;
  let transitionTimeout;
  let isHovered = false;
  let isPaused = document.hidden;
  let isTransitioning = false;

  function scheduleRotation() {
    if (motionPreference.matches || isPaused || isTransitioning) return;
    window.clearTimeout(rotationTimeout);
    rotationTimeout = window.setTimeout(rotatePhrase, 1800);
  }

  function showFirstPhrase() {
    window.clearTimeout(rotationTimeout);
    window.clearTimeout(transitionTimeout);
    phrases.forEach(phrase => phrase.classList.remove('is-active', 'is-leaving'));
    phrases[0].classList.add('is-active');
    activeIndex = 0;
    isTransitioning = false;
  }

  function pauseRotation() {
    isPaused = true;
    window.clearTimeout(rotationTimeout);
  }

  function resumeRotation() {
    isPaused = isHovered || document.hidden || motionPreference.matches;
    scheduleRotation();
  }

  function rotatePhrase() {
    if (motionPreference.matches || isPaused || isTransitioning) return;
    const currentPhrase = phrases[activeIndex];
    const nextIndex = (activeIndex + 1) % phrases.length;
    const nextPhrase = phrases[nextIndex];
    isTransitioning = true;
    currentPhrase.classList.remove('is-active');
    currentPhrase.classList.add('is-leaving');
    nextPhrase.classList.add('is-active');

    transitionTimeout = window.setTimeout(() => {
      currentPhrase.classList.remove('is-leaving');
      activeIndex = nextIndex;
      isTransitioning = false;
      scheduleRotation();
    }, 400);
  }

  rotator.addEventListener('mouseenter', () => {
    isHovered = true;
    pauseRotation();
  });
  rotator.addEventListener('mouseleave', () => {
    isHovered = false;
    resumeRotation();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pauseRotation();
    else resumeRotation();
  });
  motionPreference.addEventListener('change', event => {
    if (event.matches) {
      pauseRotation();
      showFirstPhrase();
    } else {
      resumeRotation();
    }
  });

  if (motionPreference.matches) return;
  scheduleRotation();
}

// --- 3. Mobile Navigation ---
let mobileNavCloseTimeout;

function toggleMobileNav() {
  const menu = document.getElementById('mobile-nav-menu');
  const toggle = document.getElementById('mobile-nav-toggle');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');
  if (!menu || !toggle) return;

  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  clearTimeout(mobileNavCloseTimeout);

  if (isOpen) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    menu.setAttribute('aria-hidden', 'true');
    menu.inert = true;
    menu.classList.remove('nav-open');
    menu.classList.add('nav-closing');
    if (openIcon) openIcon.classList.remove('hidden');
    if (closeIcon) closeIcon.classList.add('hidden');
    mobileNavCloseTimeout = setTimeout(() => {
      if (toggle.getAttribute('aria-expanded') !== 'true') {
        menu.classList.add('hidden');
        menu.classList.remove('nav-closing');
      }
    }, 180);
    return;
  }

  menu.classList.remove('hidden', 'nav-closing');
  menu.setAttribute('aria-hidden', 'false');
  menu.inert = false;
  toggle.setAttribute('aria-expanded', 'true');
  toggle.setAttribute('aria-label', 'Close navigation');
  if (openIcon) openIcon.classList.add('hidden');
  if (closeIcon) closeIcon.classList.remove('hidden');
  requestAnimationFrame(() => menu.classList.add('nav-open'));
}

function initMobileNav() {
  const menu = document.getElementById('mobile-nav-menu');
  const toggle = document.getElementById('mobile-nav-toggle');
  if (!menu || !toggle) return;

  toggle.setAttribute('aria-controls', menu.id);
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
  menu.setAttribute('aria-label', 'Mobile navigation');
  menu.setAttribute('aria-hidden', 'true');
  menu.inert = true;

  document.addEventListener('click', (event) => {
    if (toggle.getAttribute('aria-expanded') !== 'true') return;
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
      toggleMobileNav();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      toggleMobileNav();
      toggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && toggle.getAttribute('aria-expanded') === 'true') {
      toggleMobileNav();
    }
  });
}

// --- 5. Interactive Sprint Intake Modal ---
let modalReturnFocus = null;
let modalBodyOverflow = '';

function openModal(defaultService = null) {
  const modal = document.getElementById('project-modal');
  if (!modal) {
    window.location.href = defaultService ? `contact.html?type=${encodeURIComponent(defaultService)}` : 'contact.html';
    return;
  }
  if (modal.classList.contains('hidden')) {
    modalReturnFocus = document.activeElement;
    modalBodyOverflow = document.body.style.overflow;
  }
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  if (defaultService) {
    const select = document.getElementById('modal-service-select');
    if (select) {
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].text.toLowerCase().includes(defaultService.toLowerCase())) {
          select.selectedIndex = i;
          break;
        }
      }
    }
  }
  const firstField = modal.querySelector('form input, form select, form textarea, form button')
    || modal.querySelector('button');
  if (firstField) firstField.focus();
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = modalBodyOverflow;
  const success = document.getElementById('modal-success');
  if (success) success.classList.add('hidden');
  if (modalReturnFocus && typeof modalReturnFocus.focus === 'function') {
    modalReturnFocus.focus();
  }
  modalReturnFocus = null;
}

function handleFormSubmit(e) {
  e.preventDefault();
  prepareEnquiryEmail(e.currentTarget, document.getElementById('modal-success'));
}

function prepareEnquiryEmail(form, status) {
  if (!form || !status) return;

  const fields = [...form.querySelectorAll('input, select, textarea')]
    .filter(field => !field.disabled && !['button', 'submit', 'reset', 'hidden'].includes(field.type))
    .map(field => {
      const label = field.labels?.[0]?.textContent.trim().replace(/\s*\*$/, '')
        || field.getAttribute('aria-label')
        || field.placeholder
        || 'Enquiry detail';
      return `${label}: ${field.value.trim()}`;
    })
    .filter(entry => !entry.endsWith(':'));
  const subject = 'Quill Labs project enquiry';
  const body = [
    'Hello Quill Labs,',
    '',
    ...fields,
    '',
    'Please reply to discuss this enquiry.',
  ].join('\n');
  const emailLink = document.createElement('a');
  emailLink.href = `mailto:hello@quilllabs.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  emailLink.className = 'font-bold underline';
  emailLink.textContent = 'Open email draft';

  status.replaceChildren(
    document.createTextNode('Your enquiry has not been sent yet. Open the draft below in your email app and press Send to complete it. '),
    emailLink,
  );
  status.classList.remove('hidden');
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  status.setAttribute('tabindex', '-1');
  status.focus();
}

function initModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  modal.setAttribute('aria-hidden', 'true');
  const dialog = modal.firstElementChild;
  if (dialog) {
    dialog.setAttribute('role', 'dialog');
    dialog.setAttribute('aria-modal', 'true');
    const heading = dialog.querySelector('h3');
    if (heading) {
      if (!heading.id) heading.id = 'project-modal-title';
      dialog.setAttribute('aria-labelledby', heading.id);
    }
  }

  const closeButton = modal.querySelector('button[onclick="closeModal()"]');
  if (closeButton) closeButton.setAttribute('aria-label', 'Close project intake');
  const success = document.getElementById('modal-success');
  if (success) success.setAttribute('aria-live', 'polite');

  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (modal.classList.contains('hidden')) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
      return;
    }
    if (event.key !== 'Tab' || !dialog) return;

    const focusable = [...dialog.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')]
      .filter(element => element.getClientRects().length > 0);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

// --- 6. Desktop Offers Mega Menu: Click-to-Lock + Hover Grace Cushion ---
function initOffersMegaMenu() {
  const triggerItem = document.getElementById('nav-offers-item');
  const triggerBtn = document.getElementById('nav-offers-btn');
  const megaMenu = document.getElementById('nav-offers-menu');
  if (!triggerItem || !megaMenu) return;

  if (triggerBtn) {
    triggerBtn.setAttribute('aria-controls', megaMenu.id);
    triggerBtn.removeAttribute('aria-haspopup');
  }
  megaMenu.setAttribute('aria-hidden', 'true');
  megaMenu.inert = true;
  let isLockedOpen = false;
  let hoverTimeout = null;
  let visibilityTimeout = null;

  function openMenu(lock = false) {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    if (visibilityTimeout) clearTimeout(visibilityTimeout);
    triggerItem.classList.add('menu-open');
    megaMenu.classList.add('menu-visible');
    megaMenu.style.visibility = 'visible';
    megaMenu.style.opacity = '1';
    megaMenu.style.transform = 'translate(-50%, 0)';
    megaMenu.style.pointerEvents = 'auto';
    megaMenu.setAttribute('aria-hidden', 'false');
    megaMenu.inert = false;
    if (triggerBtn) {
      triggerBtn.setAttribute('aria-expanded', 'true');
      triggerBtn.classList.add('bg-white/10', 'text-white');
      const chevron = triggerBtn.querySelector('svg');
      if (chevron) chevron.classList.add('rotate-180');
    }
    if (lock) {
      isLockedOpen = true;
    }
  }

  function closeMenu(force = false) {
    if (isLockedOpen && !force) return;
    if (hoverTimeout) clearTimeout(hoverTimeout);
    isLockedOpen = false;
    triggerItem.classList.remove('menu-open');
    megaMenu.classList.remove('menu-visible');
    megaMenu.style.opacity = '0';
    megaMenu.style.transform = 'translate(-50%, 0.5rem)';
    megaMenu.style.pointerEvents = 'none';
    megaMenu.setAttribute('aria-hidden', 'true');
    megaMenu.inert = true;
    visibilityTimeout = setTimeout(() => {
      if (!triggerItem.classList.contains('menu-open')) {
        megaMenu.style.visibility = 'hidden';
      }
    }, 180);
    if (triggerBtn) {
      triggerBtn.setAttribute('aria-expanded', 'false');
      if (!window.location.pathname.endsWith('offers.html')) {
        triggerBtn.classList.remove('bg-white/10');
      }
      const chevron = triggerBtn.querySelector('svg');
      if (chevron) chevron.classList.remove('rotate-180');
    }
  }

  // 1. Clicking Offers toggles persistent open mode (stays open without hovering)
  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (isLockedOpen) {
        closeMenu(true);
      } else {
        openMenu(true);
      }
    });
  }

  // 2. Hover opens menu with a short close grace period.
  triggerItem.addEventListener('mouseenter', () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    openMenu(false);
  });

  triggerItem.addEventListener('mouseleave', () => {
    if (isLockedOpen || triggerItem.matches(':focus-within')) return;
    hoverTimeout = setTimeout(() => {
      closeMenu();
    }, 180);
  });

  triggerItem.addEventListener('focusin', () => openMenu());
  triggerItem.addEventListener('focusout', () => {
    setTimeout(() => {
      if (!triggerItem.matches(':focus-within') && !triggerItem.matches(':hover')) {
        closeMenu(true);
      }
    }, 0);
  });

  document.addEventListener('click', (e) => {
    if (!triggerItem.contains(e.target) && !megaMenu.contains(e.target)) {
      closeMenu(true);
    }
  });

  // 4. Press Escape to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && triggerItem.classList.contains('menu-open')) {
      closeMenu(true);
      if (triggerBtn) triggerBtn.focus();
    }
  });
}

function initFaqs() {
  document.querySelectorAll('.faq-content').forEach((content, index) => {
    const button = content.previousElementSibling;
    if (!button) return;
    if (!content.id) content.id = `faq-answer-${index + 1}`;
    button.setAttribute('aria-controls', content.id);
    button.setAttribute('aria-expanded', 'false');
  });
}

function toggleFaq(button) {
  const content = button.nextElementSibling;
  if (!content || !content.classList.contains('faq-content')) return;

  const isOpen = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!isOpen));
  const icon = button.querySelector('span:last-child');

  if (isOpen) {
    content.classList.remove('faq-open');
    if (icon) icon.textContent = '+';
    setTimeout(() => {
      if (button.getAttribute('aria-expanded') !== 'true') content.classList.add('hidden');
    }, 160);
  } else {
    content.classList.remove('hidden');
    if (icon) icon.textContent = '−';
    requestAnimationFrame(() => content.classList.add('faq-open'));
  }
}

function initFormLabels() {
  document.querySelectorAll('form label:not([for])').forEach((label, index) => {
    const field = label.parentElement?.querySelector('input, select, textarea');
    if (!field) return;
    if (!field.id) field.id = `form-field-${index + 1}`;
    label.htmlFor = field.id;
  });
}

function initControlStates() {
  document.querySelectorAll('.obj-btn').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.classList.contains('border-brand')));
  });
  document.querySelectorAll('.port-tab, .work-tab').forEach((button, index) => {
    button.setAttribute('aria-pressed', String(index === 0));
  });
  document.querySelectorAll('#est-time, #est-hours, #team-val').forEach((output) => {
    output.setAttribute('aria-live', 'polite');
  });
  document.querySelectorAll('header nav a, #mobile-nav-menu a').forEach((link) => {
    const target = new URL(link.href, window.location.href);
    if (target.pathname === window.location.pathname && !target.hash) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

function initInteractions() {
  initHeroPhraseRotation();
  initMobileNav();
  initModal();
  initOffersMegaMenu();
  initFaqs();
  initFormLabels();
  initControlStates();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initInteractions, { once: true });
} else {
  initInteractions();
}
