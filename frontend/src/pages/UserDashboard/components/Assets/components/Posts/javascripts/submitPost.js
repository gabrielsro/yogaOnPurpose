export default async (e, action, author, stateSetter) => {
  e.preventDefault();
  stateSetter({ status: "loading", petition: `post_${action}` });
  const form = document.getElementById("postMakerForm");
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
      stateSetter({ status: "error", petition: `post_${action}` });
      setTimeout(
        () => stateSetter({ status: "loaded", petition: "null" }),
        4000,
      );
      return;
    }
    stateSetter({ status: "success", petition: `post_${action}` });
    setTimeout(() => stateSetter({ status: "loaded", petition: "null" }), 2000);
  } catch (err) {
    console.log(err);
  }
};
