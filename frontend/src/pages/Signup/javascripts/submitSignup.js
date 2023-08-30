export default async function submitSignup(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formDataObject = Object.fromEntries(formData);
  const formDataJSON = JSON.stringify(formDataObject);
  console.log(formDataObject);
  console.log(formDataJSON);
  const responseRaw = await fetch("http://localhost:3003/users", {
    method: "POST",
    body: formDataJSON,
    headers: { "Content-Type": "application/json" },
  });
  const response = await responseRaw.json();
  console.log(responseRaw);
  console.log(response);
}
