const togggles = document.querySelectorAll(".faq-toggle");

togggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
