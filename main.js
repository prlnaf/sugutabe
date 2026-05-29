// =========================
// hamburger menu
// =========================
const hamburger = document.querySelector(".js-hamburger");
const drawer = document.querySelector(".js-drawer");
const drawerLinks = document.querySelectorAll(".js-drawer a");

if (hamburger && drawer) {
  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.toggle("is-open");

    drawer.classList.toggle("is-open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("is-fixed", isOpen);
  });

  drawerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("is-open");
      drawer.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("is-fixed");
    });
  });
}
// =========================
// FAQ accordion
// =========================
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq__question");

  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");

    faqItems.forEach((i) => {
      i.classList.remove("is-open");
      i.querySelector(".faq__question").setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});
