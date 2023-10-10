export default async (stateSetter) => {
  const response = await fetch("http://localhost:3003/users", {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) {
    console.log(response);
    stateSetter({
      status: "error",
      errorMessage:
        "We couldn't get the users right now. Please try again later",
    });
    return;
  }
  const responseJson = await response.json();
  console.log(responseJson);
  stateSetter({ status: "success", result: responseJson });
};
