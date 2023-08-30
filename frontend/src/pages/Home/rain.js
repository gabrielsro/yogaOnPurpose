import Mat from "./icons/mat.svg";
import Ball from "./icons/ball.svg";
import OmBlack from "./icons/omBlack.svg";
import LotusFlower from "./icons/lotusFlower.svg";

export default () => {
  const matIcon = document.createElement("img");
  matIcon.setAttribute("src", `${Mat}`);
  matIcon.setAttribute("alt", "Yoga mat icon");
  const ballIcon = document.createElement("img");
  ballIcon.setAttribute("src", `${Ball}`);
  ballIcon.setAttribute("alt", "Yoga ball icon");
  const blackOmIcon = document.createElement("img");
  blackOmIcon.setAttribute("src", `${OmBlack}`);
  blackOmIcon.setAttribute("alt", "Black Om icon");
  const lotusFlower = document.createElement("img");
  lotusFlower.setAttribute("src", `${LotusFlower}`);
  lotusFlower.setAttribute("alt", "Yoga position icon");
  const container = document.querySelector(".logoSection");
  const icons = [matIcon, ballIcon, blackOmIcon, lotusFlower];
  let viewport = window.innerWidth;
  icons.forEach((icon) => {
    viewport > 500
      ? icon.classList.add("homeIcon")
      : icon.classList.add("homeIconMobile");
  });

  randomizer(icons, container, 1, 3);
  randomizer(icons, container, 2, 3);
  randomizer(icons, container, 3, 3);
};

function randomizer(icons, container, part, parts) {
  const icon = icons[Math.floor(Math.random() * 4)].cloneNode();
  let xDistance = (part - 1) / parts + Math.random() * (1 / parts);
  if (xDistance > 0.95) {
    xDistance = xDistance - 0.5;
  }
  icon.style.left = `${xDistance * 100}%`;
  icon.addEventListener("animationend", () => container.removeChild(icon));
  container.appendChild(icon);
  let nextDelay = Math.random() * 3600;
  nextDelay < 2000 ? (nextDelay = 3000) : (nextDelay += 1);
  setTimeout(() => randomizer(icons, container, part, parts), nextDelay);
}
