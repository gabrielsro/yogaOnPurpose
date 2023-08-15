export default () => {
  window.addEventListener("resize", () => {
    const links = document.querySelector(".links");
    if (window.innerWidth > 500) {
      links.style.display = "flex";
    } else {
      links.style.display = "none";
    }
  });
};
