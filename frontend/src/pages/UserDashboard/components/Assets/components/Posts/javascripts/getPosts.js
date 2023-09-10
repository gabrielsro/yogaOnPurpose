export default async (stateSetter) => {
  try {
    const response = await fetch("http://localhost:3003/posts/level", {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      console.log(response);
      stateSetter({ status: "error", result: null });
      return;
    }
    const posts = await response.json();
    console.log(posts);
    stateSetter({ status: "success", result: posts });
  } catch (error) {
    console.log(error);
  }
};
