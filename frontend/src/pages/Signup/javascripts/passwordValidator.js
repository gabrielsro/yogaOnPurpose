export default () => {
  const password1 = document.getElementById("password");
  const password2Input = document.getElementById("passwordAgain");
  if (password2Input.value == password1.value) {
    password2Input.classList.add("validField");
  } else {
    password2Input.classList.remove("validField");
  }
};
