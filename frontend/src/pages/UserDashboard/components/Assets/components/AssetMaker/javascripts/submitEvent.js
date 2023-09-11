export default async (action, author, stateSetter) => {
  stateSetter({ status: "loading", petition: `event_${action}` });
  const form = document.getElementById("makerForm");
  const formData = new FormData(form);
  let formDataObject = Object.fromEntries(formData);
  formDataObject.status = action;
  formDataObject.organizers = [author.id];
  formDataObject.mainImage = "";
  formDataObject.secondaryImage = "";
  const formDataString = JSON.stringify(formDataObject);
  console.log(formDataString);
  try {
    const response = await fetch("http://localhost:3003/events", {
      method: "POST",
      credentials: "include",
      body: formDataString,
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      console.log(response);
      stateSetter({ status: "error", petition: `event_${action}` });
      setTimeout(
        () => stateSetter({ status: "loaded", petition: "null" }),
        4000,
      );
      return;
    }
    stateSetter({ status: "loaded" });
  } catch (err) {
    console.log(err);
  }
};
