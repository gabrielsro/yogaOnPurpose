export default async (
  setItemsListState,
  assetId,
  stateSetter,
  setAssetDelete,
) => {
  try {
    console.log("deleting item");
    const response = await fetch(
      `https://yogaonpurpose-production.up.railway.app/items/${assetId}`,
      {
        method: "DELETE",
        credentials: "include",
      },
    );
    setAssetDelete({ status: "off" });
    if (!response.ok) {
      console.log(response);
      stateSetter({
        status: "error",
        message: "We couldn't delete this item. Please try again later",
      });
      setTimeout(() => {
        setItemsListState({ status: "loading" });
      }, 3000);
      return;
    }

    console.log("deleted");

    stateSetter({ status: "success", message: "Item successfully deleted" });
    setTimeout(() => {
      setItemsListState({ status: "loading" });
    }, 1400);
  } catch (err) {
    console.log(err);
    stateSetter({
      status: "error",
      message: "We couldn't delete this post. Please try again later",
    });
    setTimeout(() => {
      setItemsListState({ status: "loading" });
    }, 3000);
  }
};
