import checkLinkClick from "./checkLinkClick";

export default (linkName, callback) => {
  checkLinkClick();
  callback(linkName);
};
