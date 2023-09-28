export default async (action, author, stateSetter) => {
  stateSetter({ status: "loading" });
  const form = document.getElementById("makerForm");
  const formData = new FormData(form);
  let formDataObject = Object.fromEntries(formData);
  formDataObject.status = action;
  formDataObject.author = author.id;
  formDataObject.authorName = `${author.firstName} ${author.lastName}`;
  const formDataString = JSON.stringify(formDataObject);
  try {
    const response = await fetch("http://localhost:3003/posts", {
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
