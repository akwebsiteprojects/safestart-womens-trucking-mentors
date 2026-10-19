/* SafeStart Women's Trucking Mentors — shared script for every page */

/* ====== SETTINGS: edit these three things ====== */

// 1. Where contact form messages go.
var CONTACT_EMAIL = 'sandraw0064@gmail.com';

// 2. Form delivery. Messages are sent through FormSubmit (formsubmit.co), a
//    free service that forwards each submission to CONTACT_EMAIL. No account
//    is needed. The very first submission sends an activation email to
//    CONTACT_EMAIL; click the link in it once and the form is live.
//    To use a different service, replace this with its address.
var FORM_ENDPOINT = 'https://formsubmit.co/ajax/' + CONTACT_EMAIL;

// 3. YouTube videos for the Videos page. Add one line per video. The id is the
//    part after "v=" in the YouTube link. While this list is empty the page
//    shows the "Coming soon" cards.
//    Example: { id: 'AbCdEfGhIjK', title: "Sandra's story", text: 'A short description.' }
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

    var btn = form.querySelector('button[type=submit]');
    var data = {
      name: f.name.value.trim(),
      email: f.email.value.trim(),
      phone: f.phone.value.trim() || 'Not given',
      interested_in: f.interest.value,
      message: f.message.value.trim(),
      sent_from_page: f.page.value,
      _subject: 'SafeStart enquiry from ' + f.name.value.trim(),
      _replyto: f.email.value.trim(),
      _template: 'table'
    };
    btn.disabled = true; say('Sending…');
    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (res) {
        if (!res.ok || String(res.j.success) !== 'true') throw new Error();
        form.reset(); say('Thank you. Your message has been sent and we will be in touch soon.');
      })
      .catch(function () {
        status.classList.add('error');
        status.innerHTML = 'Sorry, that did not send. Please try again, or <a data-fallback href="#">email us instead</a>.';
        status.querySelector('[data-fallback]').href = 'mailto:' + CONTACT_EMAIL +
          '?subject=' + encodeURIComponent(data._subject) +
          '&body=' + encodeURIComponent('Name: ' + data.name + '\nEmail: ' + data.email + '\nPhone: ' + data.phone +
            '\nInterested in: ' + data.interested_in + '\n\n' + data.message);
      })
      .then(function () { btn.disabled = false; });
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
