{
  document.addEventListener("DOMContentLoaded", () => {
    // fade-in-text
    const fadeInTextObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0 }
    );
    document.querySelectorAll(".fade-in-text").forEach((fadeInText) => fadeInTextObserver.observe(fadeInText));

    // fade-up
    const fadeUpObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -50px 0px", threshold: 0 }
    );
    document.querySelectorAll(".fade-up-item").forEach((fadeUpItem) => fadeUpObserver.observe(fadeUpItem));
  });
}