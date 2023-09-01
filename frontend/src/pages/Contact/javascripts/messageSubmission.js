export default () => {
  const form = document.querySelector(".contactForm form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
};
