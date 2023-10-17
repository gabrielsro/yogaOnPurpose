export default async (stateSetter) => {
  try {
    const response = await fetch("https://api.yogaonpurpose.net/items/level", {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      stateSetter({ status: "error" });
      console.log(response);
      return;
    }
    const responseObject = await response.json();
    console.log(responseObject.items);
    stateSetter({ status: "success", result: responseObject.items });
  } catch (err) {
    stateSetter({ status: "error" });
    console.log(err);
  }
};
