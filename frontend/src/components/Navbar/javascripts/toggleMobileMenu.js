export default () => {
  const menuLinks = document.querySelector(".links");
  const computedStyle = window.getComputedStyle(menuLinks);
  computedStyle.display == "none"
    ? (menuLinks.style.display = "flex")
    : (menuLinks.style.display = "none");
};
