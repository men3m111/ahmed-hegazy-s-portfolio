window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".animate-on-scroll");
  const elementsRight = document.querySelectorAll(".animate-on-scroll-to-right");
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (pos < windowHeight - 100) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
  elementsRight.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (pos < windowHeight - 100) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
});