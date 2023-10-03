export default async (itemId, stateSetter) => {
  try {
    const response = await fetch(`http://localhost:3003/items/${itemId}`, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      stateSetter({
        status: "error",
        message: "We couldn't access this item. Please try again later",
      });
      console.log(response);
      return;
    }
    const responseObject = await response.json();
    console.log(responseObject);
    stateSetter({
      status: "loaded",
      view: "item",
      result: responseObject,
    });
  } catch (err) {
    console.log(err);
    stateSetter({
      status: "error",
      message: "We couldn't access this item. Please try again later",
    });
  }
};
