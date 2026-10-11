/* SafeStart Women's Trucking Mentors — shared script for every page */

/* ====== SETTINGS: edit these three things ====== */

// 1. Where contact form messages go.
var CONTACT_EMAIL = 'sandraw0064@gmail.com';

// 2. Optional form service. Leave empty and the form opens the visitor's email
//    app with their message filled in. To have messages delivered straight to
//    your inbox instead, create a free form at formspree.io and paste its URL
//    here, for example 'https://formspree.io/f/abcdwxyz'.
var FORM_ENDPOINT = '';

// 3. YouTube videos for the Videos page. Add one line per video. The id is the
//    part after "v=" in the YouTube link. While this list is empty the page
//    shows the "Coming soon" cards.
//    Example: { id: 'AbCdEfGhIjK', title: "Sandy's story", text: 'A short description.' }
var VIDEOS = [];

/* ====== No need to edit below this line ====== */

document.documentElement.classList.add('js');

// Mobile menu
var menu = document.getElementById('menu'), links = document.getElementById('links');
if (menu && links) {
  menu.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { links.classList.remove('open'); menu.setAttribute('aria-expanded', false); });
  });
}

// Direct email links
document.querySelectorAll('[data-email-link]').forEach(function (a) {
  a.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent('SafeStart Mentorship Enquiry');
});

// Videos
var grid = document.getElementById('video-grid');
if (grid && VIDEOS.length) {
  grid.innerHTML = '';
  VIDEOS.forEach(function (v) {
    var card = document.createElement('article');
    card.className = 'video-card';
    var thumb = document.createElement('div');
    thumb.className = 'thumb';
    var frame = document.createElement('iframe');
    frame.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(v.id);
    frame.title = v.title || 'SafeStart video';
    frame.loading = 'lazy';
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen = true;
    thumb.appendChild(frame);
    var h = document.createElement('h3'); h.textContent = v.title || '';
    var p = document.createElement('p'); p.textContent = v.text || '';
    card.appendChild(thumb); card.appendChild(h); card.appendChild(p);
    grid.appendChild(card);
  });
}

// Contact forms (one on every page)
document.querySelectorAll('[data-contact-form]').forEach(function (form) {
  var status = form.querySelector('.form-status');
  function say(msg, isError) { status.textContent = msg; status.classList.toggle('error', !!isError); }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements, ok = true;
    ['name', 'email', 'message'].forEach(function (n) {
      var bad = !f[n].value.trim() || (n === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f[n].value.trim()));
      f[n].classList.toggle('invalid', bad);
      f[n].setAttribute('aria-invalid', bad);
      if (bad && ok) { f[n].focus(); ok = false; }
    });
    if (!ok) { say('Please add your name, a valid email and a message.', true); return; }
    if (f._gotcha.value) return; // spam trap

    if (FORM_ENDPOINT) {
      var btn = form.querySelector('button[type=submit]');
      btn.disabled = true; say('Sending…');
      fetch(FORM_ENDPOINT, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) })
        .then(function (r) {
          if (!r.ok) throw new Error();
          form.reset(); say('Thank you. Your message has been sent and we will be in touch soon.');
        })
        .catch(function () { say('Sorry, that did not send. Please try again or email us directly.', true); })
        .then(function () { btn.disabled = false; });
    } else {
      var body = 'Name: ' + f.name.value.trim() + '\nEmail: ' + f.email.value.trim() +
        (f.phone.value.trim() ? '\nPhone: ' + f.phone.value.trim() : '') +
        '\nInterested in: ' + f.interest.value + '\n\n' + f.message.value.trim();
      window.location.href = 'mailto:' + CONTACT_EMAIL +
        '?subject=' + encodeURIComponent('SafeStart enquiry from ' + f.name.value.trim()) +
        '&body=' + encodeURIComponent(body);
      say('Your email app should now open with your message ready. Press send there to finish.');
    }
  });
});

// Reveal on scroll
var reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('visible'); io.unobserve(x.target); } });
  }, { threshold: 0.12 });
  reveals.forEach(function (el) { io.observe(el); });
} else {
  reveals.forEach(function (el) { el.classList.add('visible'); });
}
