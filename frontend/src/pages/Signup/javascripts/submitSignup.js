export default async function submitSignup(e, stateSetter) {
  e.preventDefault();
  stateSetter({ status: "loading", messages: null });
  const formData = new FormData(e.target);
  const formDataObject = Object.fromEntries(formData);
  const formDataJSON = JSON.stringify(formDataObject);
  let response;
  let responseRaw;
  try {
    responseRaw = await fetch("http://localhost:3003/users", {
      method: "POST",
      body: formDataJSON,
      headers: { "Content-Type": "application/json" },
    });
    response = await responseRaw.json();
  } catch (err) {
    stateSetter({ status: "serverError", failedToFetch: true });
    console.log(err);
    return;
  }
  if (response.status && response.status == "success") {
    stateSetter({
      status: "success",
      messages: `User ${response.name} successfully created`,
    });
  }
  if (response.statusCode == 400) {
    const regexp = new RegExp("key");
    console.log(response);
    stateSetter({
      status: "error",
      messages: response.error,
      key: response.errors.some((m) => regexp.test(m.msg)),
    });
  }
  if (response.status && response.status == "error") {
    stateSetter({
      status: "serverError",
      messages: response.data,
      error: response.error,
    });
  }
}
