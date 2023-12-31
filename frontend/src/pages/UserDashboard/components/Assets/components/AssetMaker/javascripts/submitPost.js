export default async (action, stateSetter, editorRef) => {
  stateSetter({ status: "loading" });
  const formData = new FormData();
  let formDataObject = Object.fromEntries(formData);
  formDataObject.title = document.getElementById("postTitle").value;
  formDataObject.status = action;
  formDataObject.content = editorRef.current.getContent();
  const formDataString = JSON.stringify(formDataObject);
  try {
    const response = await fetch("https://api.yogaonpurpose.net/posts", {
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
      setTimeout(() => stateSetter({ status: "loaded" }), 4000);
      return;
    }
    if (action == "published") {
      stateSetter({
        status: "success",
        message: "Post published successfully!",
        errorMessage: null,
      });
    }
    if (action == "draft") {
      stateSetter({
        status: "done",
        message: "Post saved as a draft",
        errorMessage: null,
      });
    }
    setTimeout(() => stateSetter({ status: "loaded" }), 2000);
  } catch (err) {
    console.log(err);
  }
};
