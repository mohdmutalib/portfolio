    // Simple animation on scroll
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
      const trigger = window.innerHeight * 0.85;
      sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < trigger) {
          sec.style.opacity = '1';
          sec.style.transform = 'translateY(0)';
        }
      });
    });

    sections.forEach(sec => {
      sec.style.opacity = '0';
      sec.style.transform = 'translateY(50px)';
      sec.style.transition = '0.6s ease';
    });





    

//Email slide

function toggleEmail() {
  document.getElementById("emailBox").classList.toggle("show");
}

// COPY EMAIL
function copyEmail() {
  const email = document.getElementById("emailText").innerText;
  navigator.clipboard.writeText(email);

  const btn = document.querySelector(".copy-btn");
  btn.innerText = "Copied!";
  setTimeout(() => btn.innerText = "Copy", 1500);
}

// AUTO CLOSE ON SCROLL
window.addEventListener("scroll", () => {
  document.getElementById("emailBox").classList.remove("show");
});

