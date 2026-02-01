const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(r => {
    const windowHeight = window.innerHeight;
    const revealTop = r.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      r.classList.add('active');
    }
  });
});
