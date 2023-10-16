export default async (assetId, stateSetter, parentStateSetter) => {
  stateSetter({ status: "loading" });
  const data = new FormData();
  const dataObject = Object.fromEntries(data);
  dataObject.content = document.getElementById("postComment").value;
  dataObject.depth = 0;
  const dataString = JSON.stringify(dataObject);
  const response = await fetch(
    `https://yogaonpurpose-production.up.railway.app/comments/event/${assetId}`,
    {
      method: "POST",
      credentials: "include",
      body: dataString,
      headers: { "Content-Type": "application/json" },
    },
  );
  if (!response.ok) {
    console.log(response);
    stateSetter({ status: "loaded", error: true });
    return;
  }
  stateSetter({ status: "loaded", success: true });
  parentStateSetter({ status: "loading" });
  return;
};
