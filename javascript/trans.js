document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page");

  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");

    // تجاهل الروابط الخارجية أو الفارغة
    if (!href || href.startsWith("http") || href.startsWith("#")) return;

    link.addEventListener("click", e => {
      e.preventDefault();
      page.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 400); // نفس مدة fade-out
    });
  });
});
