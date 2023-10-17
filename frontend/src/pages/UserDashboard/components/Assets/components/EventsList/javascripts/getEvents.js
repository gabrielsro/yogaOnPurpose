export default async (stateSetter) => {
  try {
    const response = await fetch(
      "https://api.yogaonpurpose.net/events/account",
      {
        method: "GET",
        credentials: "include",
      },
    );
    if (!response.ok) {
      stateSetter({ status: "error" });
      console.log(response);
      return;
    }
    const responseObject = await response.json();
    console.log(responseObject.events);
    stateSetter({ status: "success", result: responseObject.events });
  } catch (err) {
    stateSetter({ status: "error" });
    console.log(err);
  }
};
