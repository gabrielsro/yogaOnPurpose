export default async (postId, stateSetter) => {
  stateSetter({ status: "loading" });
  try {
    const response = await fetch(`http://localhost:3003/posts/${postId}`, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      stateSetter({
        status: "error",
        message: "We couldn't access the post at this time",
      });
      console.log(response);
      return;
    }
    const responseObject = await response.json();
    console.log(responseObject);
    stateSetter({
      status: "loaded",
      view: "post",
      result: responseObject.post,
    });
  } catch (err) {
    console.log(err);
    stateSetter({
      status: "error",
      message: "We couldn't access the post at this time",
    });
  }
};
