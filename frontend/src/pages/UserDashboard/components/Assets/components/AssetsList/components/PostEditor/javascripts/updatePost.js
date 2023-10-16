export default async (
  postType,
  postId,
  postTitle,
  postContent,
  stateSetter,
  recoverySetter,
  setPostListState,
  buttonSetter,
) => {
  stateSetter({ status: "loading" });

  const data = {
    postType,
    postTitle,
    postContent,
  };

  const dataString = JSON.stringify(data);

  const response = await fetch(
    `https://yogaonpurpose-production.up.railway.app/posts/${postId}`,
    {
      method: "PUT",
      credentials: "include",
      body: dataString,
      headers: { "Content-Type": "application/json" },
    },
  );

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
    setPostListState({ status: "loading" });
  }, 2000);

  return;
};
