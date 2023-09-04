export default async function submitSignup(e, stateSetter) {
  e.preventDefault();
  stateSetter({ status: "loading", messages: null });
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
  if (response.statusCode == 400) {
    stateSetter({ status: "error", messages: response.data.errors });
  }
}
