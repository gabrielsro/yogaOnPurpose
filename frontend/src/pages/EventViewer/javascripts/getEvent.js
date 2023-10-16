export default async (eventId, stateSetter) => {
  try {
    const response = await fetch(
      `https://yogaonpurpose-production.up.railway.app/events/${eventId}`,
      {
        method: "GET",
        credentials: "include",
      },
    );
    if (!response.ok) {
      stateSetter({
        status: "error",
        message: "We couldn't access this event. Please try again later",
      });
      console.log(response);
      return;
    }
    const responseObject = await response.json();
    console.log(responseObject);
    stateSetter({
      status: "loaded",
      view: "event",
      result: responseObject,
    });
  } catch (err) {
    console.log(err);
    stateSetter({
      status: "error",
      message: "We couldn't access this event. Please try again later",
    });
  }
};
