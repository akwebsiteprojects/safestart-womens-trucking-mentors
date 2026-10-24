/* SafeStart Women's Trucking Mentors — shared script for every page */

/* ====== SETTINGS ====== */

// 1. YouTube videos for the Videos page. Add one line per video. The id is the
//    part after "v=" in the YouTube link. While this list is empty the page
//    shows the "Coming soon" cards.
//    Example: { id: 'AbCdEfGhIjK', title: "Sandra's story", text: 'A short description.' }
var VIDEOS = [];

// 2. Success stories on the Home page. To add one:
//    a) upload the screenshot to the images/testimonials folder, and
//    b) add an entry below, copying the one that is already there.
//    "quote" is the highlight shown in large text. "who" is a short description
//    (use first names or no names at all, never phone numbers or surnames).
//    The newest story goes at the TOP of the list. To remove one, delete its entry.
var TESTIMONIALS = [
  {
    image: 'images/testimonials/haul-truck-job.jpg',
    quote: 'I appreciate u for helping me find the new job I have. I had the idea of the haul truck but you actually made me confident to try it out.',
    who: '27-year-old, now working as a haul truck operator'
  }
];

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

// Success stories
var tgrid = document.getElementById('testimonial-grid');
if (tgrid) {
  if (!TESTIMONIALS.length) {
    tgrid.closest('section').style.display = 'none';
  } else {
    if (TESTIMONIALS.length === 1) tgrid.classList.add('single');
    TESTIMONIALS.forEach(function (t) {
      var card = document.createElement('figure');
      card.className = 'testimonial reveal visible';
      if (t.image) {
        var link = document.createElement('a');
        link.href = t.image; link.target = '_blank'; link.rel = 'noopener';
        link.className = 'shot';
        var img = document.createElement('img');
        img.src = t.image; img.loading = 'lazy';
        img.alt = 'Screenshot of a message from ' + (t.who || 'a SafeStart client');
        link.appendChild(img); card.appendChild(link);
      }
      var body = document.createElement('div'); body.className = 't-body';
      var q = document.createElement('blockquote'); q.textContent = '“' + (t.quote || '') + '”';
      var c = document.createElement('figcaption'); c.textContent = t.who || '';
      body.appendChild(q); body.appendChild(c); card.appendChild(body);
      tgrid.appendChild(card);
    });
  }
}

// Contact form (one on every page). Sending opens the visitor's email app
// with a message to the address in the form's data-email attribute,
// already filled in with everything they typed.
document.querySelectorAll('[data-contact-form]').forEach(function (form) {
  var status = form.querySelector('.form-status');
  var to = form.getAttribute('data-email');
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

    var name = f.name.value.trim();
    var body = 'Name: ' + name +
      '\nEmail: ' + f.email.value.trim() +
      '\nPhone: ' + (f.phone.value.trim() || 'Not given') +
      '\nInterested in: ' + f.interest.value +
      '\nSent from: ' + f.page.value + ' page' +
      '\n\n' + f.message.value.trim();
    window.location.href = 'mailto:' + to +
      '?subject=' + encodeURIComponent('SafeStart enquiry from ' + name) +
      '&body=' + encodeURIComponent(body);
    say('Your email app should now open with your message ready. Press send there to finish. ' +
        'If nothing opened, email us at ' + to + '.');
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
