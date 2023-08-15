export default () => {
  const menu = document.querySelector("#menu img");
  menu.classList.add("menuIconAnimation");
  menu.addEventListener("animationend", () =>
    menu.classList.remove("menuIconAnimation"),
  );
};
