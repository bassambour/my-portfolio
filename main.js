document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.fade-in-up, .fade-in-right');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 }); // smaller threshold triggers earlier

  elements.forEach(el => observer.observe(el));
});
