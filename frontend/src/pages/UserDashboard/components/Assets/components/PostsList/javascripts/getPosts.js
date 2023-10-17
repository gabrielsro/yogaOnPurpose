export default async (stateSetter) => {
  try {
    const response = await fetch("https://api.yogaonpurpose.net/posts/level", {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      console.log(response);
      stateSetter({ status: "error" });
      return;
    }
    const posts = await response.json();
    console.log(posts);
    stateSetter({ status: "success", result: posts.posts });
  } catch (error) {
    stateSetter({ status: "error" });
    console.log(error);
  }
};
