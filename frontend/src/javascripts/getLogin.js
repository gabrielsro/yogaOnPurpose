export default async (setAppState, setLoggedUser) => {
  try {
    const request = await fetch("https://api.yogaonpurpose.net/login", {
      method: "GET",
      credentials: "include",
    });
    const requestJSON = await request.json();
    console.log(requestJSON);
    if (requestJSON.username) {
      setAppState("loaded");
      setLoggedUser(requestJSON);
      return;
    }
    setAppState("loaded");
  } catch (err) {
    setAppState("loaded");
    console.log(err);
  }
};
