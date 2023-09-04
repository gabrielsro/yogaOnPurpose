import passwordValidator from "./passwordValidator";

export default () => {
  const password1 = document.getElementById("password");
  const password2Label = document.getElementById("passwordAgainLabel");
  const password2Input = document.getElementById("passwordAgain");
  passwordValidator();
  if (password1.value.length > 9) {
    password2Input.classList.remove("invisible");
    password2Label.classList.remove("invisible");
    password1.classList.add("validField");
  } else {
    password2Input.classList.add("invisible");
    password2Label.classList.add("invisible");
    password1.classList.remove("validField");
    password2Input.classList.remove("validField");
    password2Input.value = "";
  }
};
