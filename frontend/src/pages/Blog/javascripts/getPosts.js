export default async (stateSetter) => {
  try {
    const response = await fetch("http://localhost:3003/posts", {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      stateSetter({
        status: "error",
        message: "We couldn't access the posts at this time",
      });
      console.log(response);
      return;
    }
    const responseObject = await response.json();
    console.log(responseObject);
    stateSetter({
      status: "loaded",
      result: responseObject.posts,
      view: "list",
    });
  } catch (err) {
    console.log(err);
    stateSetter({
      status: "error",
      message: "We couldn't access the posts at this time",
    });
  }
};
