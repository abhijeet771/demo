function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
}

// Smooth scroll for anchor links with href="#..."
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href === "#") return;
    const id = href.substring(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      scrollToId(id);
    }
  });
});

// Buttons with data-scroll="sectionId"
document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-scroll");
    if (target) scrollToId(target);
  });
});

// Buttons with data-alert="Message"
document.querySelectorAll("[data-alert]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const msg = btn.getAttribute("data-alert");
    if (msg) alert(msg);
  });
});

// Buttons with data-open="https://url"
document.querySelectorAll("[data-open]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const url = btn.getAttribute("data-open");
    if (url) window.open(url, "_blank");
  });
});

// Burger menu toggle
const burger = document.getElementById("burger");
const nav = document.querySelector(".nav");
if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
  });
}
