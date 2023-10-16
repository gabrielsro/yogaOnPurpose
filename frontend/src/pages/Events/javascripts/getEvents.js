export default async (stateSetter) => {
  try {
    const response = await fetch(
      "https://yogaonpurpose-production.up.railway.app/events",
      {
        method: "GET",
        credentials: "include",
      },
    );
    if (!response.ok) {
      stateSetter({
        status: "error",
        message: "We couldn't access the events at this time",
      });
      console.log(response);
      return;
    }
    const responseObject = await response.json();
    console.log(responseObject);
    stateSetter({
      status: "loaded",
      result: responseObject.events,
      view: "list",
    });
  } catch (err) {
    console.log(err);
    stateSetter({
      status: "error",
      message: "We couldn't access the events at this time",
    });
  }
};
