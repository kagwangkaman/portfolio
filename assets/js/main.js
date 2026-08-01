document.getElementById('year').textContent = new Date().getFullYear();

var header = document.querySelector('header.nav');
var toggle = document.querySelector('.nav-toggle');
var navLinks = document.getElementById('nav-links');

function setMenu(open) {
  navLinks.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
}

if (toggle) {
  toggle.addEventListener('click', function () {
    setMenu(!navLinks.classList.contains('open'));
  });
  header.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
  document.addEventListener('click', function (e) {
    if (!header.contains(e.target)) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });
}

var sections = ['home', 'about', 'resume', 'experience', 'education', 'skills', 'contact'];
var links = document.querySelectorAll('.nav-links a[href^="#"]');

function onScroll() {
  var pos = window.scrollY + 120;
  var current = 'home';
  sections.forEach(function (id) {
    var el = document.getElementById(id);
    if (el && el.offsetTop <= pos) current = id;
  });
  links.forEach(function (link) {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
