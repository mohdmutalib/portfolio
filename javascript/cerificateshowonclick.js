function openCert(imageSrc) {
  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("certModalImg");

  modalImg.src = imageSrc;
  modal.style.display = "flex";
}

function closeCert() {
  document.getElementById("certModal").style.display = "none";
}

/* إغلاق عند الضغط خارج الصورة */
window.addEventListener("click", e => {
  const modal = document.getElementById("certModal");
  if (e.target === modal) {
    closeCert();
  }
});
