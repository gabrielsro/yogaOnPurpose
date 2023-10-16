export default async (
  parentListStateSetter,
  assetId,
  stateSetter,
  setAssetDelete,
) => {
  try {
    const response = await fetch(
      `https://yogaonpurpose-production.up.railway.app/events/${assetId}`,
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
        message: "We couldn't delete this event. Please try again later",
      });
      setTimeout(() => {
        parentListStateSetter({ status: "loading" });
      }, 3000);
      return;
    }

    stateSetter({ status: "success", message: "Event successfully deleted" });
    setTimeout(() => {
      parentListStateSetter({ status: "loading" });
    }, 1400);
  } catch (err) {
    console.log(err);
    stateSetter({
      status: "error",
      message: "We couldn't delete this event. Please try again later",
    });
    setTimeout(() => {
      parentListStateSetter({ status: "loading" });
    }, 3000);
  }
};
