/* SafeStart Women's Trucking Mentors — shared script for every page */

/* ====== SETTINGS ====== */

// 1. YouTube videos for the Videos page. Add one line per video. The id is the
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

// "Copy email address" buttons
document.querySelectorAll('[data-copy]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var text = btn.getAttribute('data-copy');
    var status = btn.parentNode.querySelector('.form-status');
    function done() { if (status) status.textContent = 'Copied: ' + text; }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { if (status) status.textContent = text; });
    } else { if (status) status.textContent = text; }
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
