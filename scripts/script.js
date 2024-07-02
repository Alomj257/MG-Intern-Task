const hammenu = document.querySelector(".ham");
const hamLinks = document.querySelector(".ham-links");
hammenu.addEventListener("click", () => {
  hammenu.classList.toggle("active");
  hamLinks.classList.toggle("active");
});
