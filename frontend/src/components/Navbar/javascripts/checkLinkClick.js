import toggleMobileMenu from "./toggleMobileMenu";

export default () => {
  window.innerWidth < 791 && toggleMobileMenu();
};
