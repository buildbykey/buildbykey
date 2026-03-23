/* ============================================================
   ELIZÉE — WIZAŻYSTKA
   main.js — vanilla JS interactions
   ============================================================ */

// --- NAV: add 'scrolled' class on scroll ---
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}


// --- HAMBURGER MENU ---
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });
}


// --- SMOOTH SCROLL for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const offset = (nav ? nav.offsetHeight : 72) + 16;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth'
    });
  });
});


// --- CONTACT FORM: basic validation + success message ---
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const name  = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();

    if (!name || !email) {
      // highlight empty required fields
      [form.querySelector('#name'), form.querySelector('#email')].forEach(field => {
        if (!field.value.trim()) {
          field.classList.add('has-error');
          field.addEventListener('input', () => {
            field.classList.remove('has-error');
          }, { once: true });
        }
      });
      return;
    }

    // Simulated send — replace with real backend / Formspree / EmailJS
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Wysyłanie...';
    btn.disabled = true;

    setTimeout(() => {
      successMsg.hidden = false;
      form.reset();
      btn.textContent = 'Wyślij wiadomość →';
      btn.disabled = false;
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 800);
  });
}


// --- INTERSECTION OBSERVER: fade-in on scroll ---
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// --- FAQ ACCORDION ---
document.querySelectorAll('.faq__item').forEach(item => {
  const btn = item.querySelector('.faq__question');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', isOpen);
  });
});


// --- FAQ AUTO-ROTATE ---
(function() {
  const allItems = Array.from(document.querySelectorAll('.faq__item'));
  if (allItems.length < 4) return;

  const PER_SET = 3;
  const INTERVAL = 10000;
  const totalSets = Math.floor(allItems.length / PER_SET);
  let currentSet = 0;
  let paused = false;
  let timer = null;

  // Hide all items beyond first set
  allItems.slice(PER_SET).forEach(item => item.classList.add('faq__item--hidden'));

  // Pause when any accordion is opened, resume when all are closed
  allItems.forEach(item => {
    item.querySelector('.faq__question').addEventListener('click', () => {
      const anyOpen = allItems.some(i => i.classList.contains('is-open'));
      // 'is-open' toggled BEFORE this fires, so check after a tick
      setTimeout(() => {
        const anyOpenNow = allItems.some(i => i.classList.contains('is-open'));
        if (anyOpenNow) {
          paused = true;
          clearInterval(timer);
        } else {
          paused = false;
          scheduleRotation();
        }
      }, 0);
    });
  });

  function rotateFAQ() {
    if (paused) return;
    const nextSet = (currentSet + 1) % totalSets;
    const outItems = allItems.slice(currentSet * PER_SET, (currentSet + 1) * PER_SET);
    const inItems  = allItems.slice(nextSet * PER_SET, (nextSet + 1) * PER_SET);

    // Animate out current set
    outItems.forEach(item => item.classList.add('faq__item--animating-out'));

    setTimeout(() => {
      outItems.forEach(item => {
        item.classList.add('faq__item--hidden');
        item.classList.remove('faq__item--animating-out');
      });
      inItems.forEach(item => {
        item.classList.remove('faq__item--hidden');
        item.classList.add('faq__item--animating-in');
      });
      setTimeout(() => {
        inItems.forEach(item => item.classList.remove('faq__item--animating-in'));
      }, 400);
      currentSet = nextSet;
    }, 400);
  }

  function scheduleRotation() {
    clearInterval(timer);
    timer = setInterval(rotateFAQ, INTERVAL);
  }

  scheduleRotation();
})();


// --- SERVICE MODAL ---
const serviceData = {
  'smokey-eye': {
    tag: 'Makijaż',
    title: 'Smokey Eye',
    desc: 'Zmysłowy makijaż oka tworzący głębię i intensywność. Dostępny w trzech wersjach: czarny, burgundowy lub złoty.',
    list: ['Dobór koloru do Twojej karnacji', 'Baza pod cień dla całodobowej trwałości', 'Precyzyjny gradient i roztarcie', 'Utrwalenie fiksatorem'],
    duration: 'ok. 60–75 min',
    price: 'od 220 zł'
  },
  'wieczorowy': {
    tag: 'Makijaż',
    title: 'Wieczorowy',
    desc: 'Elegancki makijaż na bal, galę lub uroczystość. Zaprojektowany z myślą o sztucznym świetle i zdjęciach.',
    list: ['Konturowanie i rozświetlenie twarzy', 'Intensywny makijaż oka', 'Trwałość 8–12 godzin', 'Fotograficzny efekt w każdym świetle'],
    duration: 'ok. 75–90 min',
    price: 'od 250 zł'
  },
  'dzienny': {
    tag: 'Makijaż',
    title: 'Dzienny',
    desc: 'Naturalny, świeży makijaż do pracy i codziennych spotkań. Skóra wygląda jak skóra — tylko piękniejsza.',
    list: ['Lekka baza dopasowana do cery', 'Ukrycie niedoskonałości bez efektu maski', 'Naturalny makijaż oka i brwi', 'Świeże wykończenie przez cały dzień'],
    duration: 'ok. 45–60 min',
    price: 'od 180 zł'
  },
  'glamour': {
    tag: 'Makijaż',
    title: 'Glamour',
    desc: 'Intensywny look inspirowany estetyką Victoria\'s Secret — głęboki glow i pewność siebie w każdym ruchu.',
    list: ['Full coverage z efektem glow', 'Intensywne konturowanie i highlighting', 'Mocny makijaż oka', 'Glossy lub matowe usta — do wyboru'],
    duration: 'ok. 75–90 min',
    price: 'od 250 zł'
  },
  'cera-dojrzala': {
    tag: 'Makijaż',
    title: 'Dla cery dojrzałej',
    desc: 'Optyczny lifting i rozświetlenie skóry dojrzałej. Bez osiadania w zmarszczkach — efekt: świeżo i promieniście.',
    list: ['Pielęgnacyjna baza, która nie zasycha', 'Korekta przebarwień i nierówności', 'Techniki optycznie unosząca rysy', 'Lekkie wykończenie bez ciężkich pudrów'],
    duration: 'ok. 75–90 min',
    price: 'od 220 zł'
  }
};

const modal       = document.getElementById('serviceModal');
const modalTag    = document.getElementById('modalTag');
const modalTitle  = document.getElementById('modalTitle');
const modalDesc   = document.getElementById('modalDesc');
const modalList   = document.getElementById('modalList');
const modalDur    = document.getElementById('modalDuration');
const modalPrice  = document.getElementById('modalPrice');

function openModal(id) {
  const d = serviceData[id];
  if (!d || !modal) return;
  modalTag.textContent   = d.tag;
  modalTitle.textContent = d.title;
  modalDesc.textContent  = d.desc;
  modalList.innerHTML    = d.list.map(item => `<li>${item}</li>`).join('');
  modalDur.innerHTML     = `<strong>Czas:</strong> ${d.duration}`;
  modalPrice.innerHTML   = `<strong>Cena:</strong> ${d.price}`;
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal__close').focus();
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (modal) {
  modal.querySelector('.modal__backdrop').addEventListener('click', closeModal);
  modal.querySelector('.modal__close').addEventListener('click', closeModal);
  modal.querySelector('.modal__cta').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

document.querySelectorAll('.service-card[data-service]').forEach(card => {
  card.addEventListener('click', e => {
    if (e.target.closest('.service-card__link')) return;
    openModal(card.dataset.service);
  });
});


// Apply fade-in to main sections and cards
document.querySelectorAll(
  '.intro__inner, .service-card, .about__img-wrap, .about__content, .portfolio__item, .testimonial, .trust__inner, .faq__item, .contact__info, .contact__form'
).forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.07}s`;
  el.classList.add('fade-in');
  observer.observe(el);
});

