export default async (
  parentListStateSetter,
  assetId,
  stateSetter,
  setAssetDelete,
) => {
  try {
    const response = await fetch(`http://localhost:3003/posts/${assetId}`, {
      method: "DELETE",
      credentials: "include",
    });
    setAssetDelete({ status: "off" });
    if (!response.ok) {
      console.log(response);
      stateSetter({
        status: "error",
        message: "We couldn't delete this post. Please try again later",
      });
      setTimeout(() => {
        parentListStateSetter({ status: "loading" });
      }, 3000);
      return;
    }

    stateSetter({ status: "success", message: "Post successfully deleted" });
    setTimeout(() => {
      parentListStateSetter({ status: "loading" });
    }, 1400);
  } catch (err) {
    console.log(err);
    stateSetter({
      status: "error",
      message: "We couldn't delete the popst. Please try again later",
    });
    setTimeout(() => {
      parentListStateSetter({ status: "loading" });
    }, 3000);
  }
};
