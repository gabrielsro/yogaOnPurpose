export default async (parentComment, stateSetter) => {
  console.log(parentComment);
  try {
    const response = await fetch(
      `https://api.yogaonpurpose.net/${parentComment._id}`,
      { method: "GET", credentials: "include" },
    );
    if (!response.ok) {
      stateSetter({ status: "error" });
      return;
    }
    const replies = await response.json();
    console.log(replies);
    stateSetter({ status: "loaded", result: replies });
  } catch (err) {
    console.log(err);
  }
};
