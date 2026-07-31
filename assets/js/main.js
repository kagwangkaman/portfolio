document.getElementById('year').textContent = new Date().getFullYear();

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
