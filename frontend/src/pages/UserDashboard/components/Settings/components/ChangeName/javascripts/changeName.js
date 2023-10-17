export default async (e, stateSetter, setLoggedUser) => {
  e.preventDefault();
  stateSetter({ status: "loading" });
  const firstName = document.getElementById("newFirstName").value;
  const lastName = document.getElementById("newLastName").value;
  const data = new FormData();
  const dataObject = Object.fromEntries(data);
  dataObject.firstName = firstName;
  dataObject.lastName = lastName;
  const dataString = JSON.stringify(dataObject);

  const response = await fetch("https://api.yogaonpurpose.net/users", {
    method: "PUT",
    credentials: "include",
    body: dataString,
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    stateSetter({ status: "error" });
    setTimeout(() => stateSetter({ status: "loaded" }), 3000);
    console.log(response);
    return;
  }

  const updatedUser = await response.json();
  console.log(updatedUser);
  setLoggedUser(updatedUser);

  stateSetter({ status: "success" });
  setTimeout(() => stateSetter({ status: "loaded" }), 3000);
};
