export default async (assetType, assetId, parentStateSetter) => {
  try {
    const response = await fetch(
      `https://yogaonpurpose-production.up.railway.app/comments/${assetType}/${assetId}`,
      { method: "GET", credentials: "include" },
    );
    if (!response.ok) {
      console.log(response);
      parentStateSetter({ status: "loaded", error: true });
      return;
    }
    const comments = await response.json();
    console.log(comments);
    parentStateSetter({ status: "loaded", result: comments, success: true });
  } catch (err) {
    console.log(err);
  }
};
