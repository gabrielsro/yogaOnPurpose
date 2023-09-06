export default async (e, stateSetter) => {
  e.preventDefault();
  stateSetter({ status: "loading", messages: null });
  const formData = new FormData(e.target);
  const formDataObject = Object.fromEntries(formData);
  const formDataJSON = JSON.stringify(formDataObject);
  let user;
  try {
    user = await fetch(`http://localhost:3003/login`, {
      method: "POST",
      body: formDataJSON,
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
  } catch (err) {
    console.log("la cagada");
    stateSetter({ status: "connectionError", error: err.message });
    return;
  }
  //   const receivedUser = await user.json();
  const receivedUser = await user.text();
  console.log(receivedUser);
  if (receivedUser.statusCode && receivedUser.statusCode == 500) {
    stateSetter({ status: "serverError", error: receivedUser.error });
  }
};
