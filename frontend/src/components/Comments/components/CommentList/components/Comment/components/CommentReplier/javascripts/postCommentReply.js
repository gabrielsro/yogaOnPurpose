export default async (event, comment, stateSetter, contextType) => {
  let depth = comment.depth;
  depth++;
  stateSetter({ status: "loading" });
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data);
  dataObject.depth = depth;
  dataObject.contextType = contextType;
  if (contextType == "post") {
    dataObject.postContextId = comment.postContextId;
  }
  if (contextType == "event") {
    dataObject.eventContextId = comment.eventContextId;
  }
  dataObject.commentTarget = comment._id;

  const dataString = JSON.stringify(dataObject);
  try {
    const response = await fetch(
      `http://localhost:3003/comments/comment/${comment._id}`,
      {
        method: "POST",
        credentials: "include",
        body: dataString,
        headers: { "Content-Type": "application/json" },
      },
    );
    if (!response.ok) {
      stateSetter({ status: "loaded", error: true });
      return;
    }
    stateSetter({ status: "loaded", success: true });
  } catch (err) {
    stateSetter({ status: "loaded", error: true });
    console.log(err);
  }
};
