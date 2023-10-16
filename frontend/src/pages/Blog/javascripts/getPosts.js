export default async (stateSetter) => {
  try {
    const response = await fetch(
      "https://yogaonpurpose-production.up.railway.app/posts",
      {
        method: "GET",
        credentials: "include",
      },
    );
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
