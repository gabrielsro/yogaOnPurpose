export default () => {
  const slides = document.querySelectorAll(".slide");
  setTimeout(() => automateSlides(0, 2600, slides), 2600);
};

function automateSlides(index, delay, slides) {
  slides[index].classList.remove("activeSlide");
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  slides[index].classList.add("activeSlide");
  setTimeout(() => automateSlides(index, delay, slides), delay);
}
