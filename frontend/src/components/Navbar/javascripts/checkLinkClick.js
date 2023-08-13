import toggleMobileMenu from "./toggleMobileMenu";

export default () => window.innerWidth < 501 && toggleMobileMenu();
