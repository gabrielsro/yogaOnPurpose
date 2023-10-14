export default async (
  postType,
  postId,
  postTitle,
  postContent,
  stateSetter,
  recoverySetter,
  setLoggedUser,
  buttonSetter,
) => {
  stateSetter({ status: "loading" });

  const data = {
    postType,
    postTitle,
    postContent,
  };

  const dataString = JSON.stringify(data);

  const response = await fetch(`http://localhost:3003/posts/${postId}`, {
    method: "PUT",
    credentials: "include",
    body: dataString,
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    console.log(response);
    stateSetter({ status: "error" });
    recoverySetter({ title: postTitle, content: postContent });
    setTimeout(
      () =>
        stateSetter({
          status: "loaded",
          error: true,
        }),
      3000,
    );

    return;
  }
  const newUser = await response.json();
  console.log(newUser);
  stateSetter({ status: "success" });
  buttonSetter({ status: "original" });
  setTimeout(() => {
    stateSetter({
      status: "loaded",
      success: true,
    });
    setLoggedUser(newUser);
  }, 2000);

  return;
};