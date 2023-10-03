export default async (action, author, stateSetter, editorRef) => {
  stateSetter({
    status: "loading",
  });
  const formData = new FormData();
  let formDataObject = Object.fromEntries(formData);
  formDataObject.name = document.getElementById("eventName");
  formDataObject.dateStart = document.getElementById("eventDate");
  formDataObject.dateEnd = document.getElementById("eventDateFinish");
  formDataObject.location = document.getElementById("eventLocation");
  formDataObject.formDataObject.status = action;
  formDataObject.organizers = [author.id];
  formDataObject.mainImage = "";
  formDataObject.secondaryImage = "";
  formDataObject.description = editorRef.current.getContent();
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
      stateSetter({
        status: "error",
        message: null,
        errorMessage: "There was an error. Please try again later",
      });
      setTimeout(() => stateSetter({ status: "loaded" }), 3000);
      return;
    }
    if (action == "published") {
      stateSetter({
        status: "success",
        message: "Event published successfully!",
        errorMessage: null,
      });
    }
    if (action == "draft") {
      stateSetter({
        status: "done",
        message: "Event saved as a draft",
        errorMessage: null,
      });
    }
    setTimeout(() => stateSetter({ status: "loaded" }), 2000);
  } catch (err) {
    console.log(err);
  }
};
