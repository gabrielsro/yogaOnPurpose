export default async (action, author, stateSetter) => {
  stateSetter({ status: "loading", petition: `item_${action}` });
  const form = document.getElementById("makerForm");
  const formData = new FormData(form);
  let formDataObject = Object.fromEntries(formData);
  formDataObject.image1 = "";
  formDataObject.image2 = "";
  formDataObject.image3 = "";
  formDataObject.image4 = "";
  formDataObject.image5 = "";
  formDataObject.status = action;
  formDataObject.uploader = author.id;
  formDataObject.uploaderName = `${author.firstName} ${author.lastName}`;
  const formDataString = JSON.stringify(formDataObject);
  console.log(formDataString);
  try {
    const response = await fetch("http://localhost:3003/items", {
      method: "POST",
      credentials: "include",
      body: formDataString,
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      console.log(response);
      stateSetter({ status: "error", petition: `item_${action}` });
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
