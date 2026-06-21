document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.querySelector('.header__menu-btn');
const nav = document.querySelector('.header__nav');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', open);
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const resumeFab = document.querySelector('.resume-fab');
const resumeSection = document.getElementById('resume');

if (resumeFab && resumeSection) {
  const observer = new IntersectionObserver(
    ([entry]) => resumeFab.classList.toggle('is-hidden', entry.isIntersecting),
    { threshold: 0.15 }
  );
  observer.observe(resumeSection);
}
