export default async (e, stateSetter, userSetter, navigate) => {
  e.preventDefault();
  stateSetter({ status: "loading", messages: null });
  const formData = new FormData(e.target);
  const formDataObject = Object.fromEntries(formData);
  const formDataJSON = JSON.stringify(formDataObject);
  let user;
  try {
    user = await fetch(
      "https://yogaonpurpose-production.up.railway.app/login",
      {
        method: "POST",
        body: formDataJSON,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      },
    );
  } catch (err) {
    stateSetter({ status: "connectionError", error: err.message });
    return;
  }
  const receivedUser = await user.json();
  if (receivedUser.username) {
    userSetter(receivedUser);
    navigate("/user");
  }
  if (receivedUser.info) {
    stateSetter({
      status: "wrongCredentials",
      error: receivedUser.info.message,
    });
  }
  if (receivedUser.statusCode && receivedUser.statusCode == 500) {
    stateSetter({ status: "serverError", error: receivedUser.error });
  }
};
