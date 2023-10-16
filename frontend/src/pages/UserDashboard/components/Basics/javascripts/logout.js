export default async (stateSetter, userSetter, navigate) => {
  stateSetter({
    status: "loading",
    message: null,
    errorMessage: null,
  });
  try {
    const logout = await fetch(
      "https://yogaonpurpose-production.up.railway.app/logout",
      {
        method: "POST",
        credentials: "include",
      },
    );
    if (logout.ok) {
      stateSetter({
        status: "done",
        message: "Successfully logged you out",
        errorMessage: null,
      });
      setTimeout(() => {
        userSetter(null);
        navigate("/login");
      }, 2000);
    } else {
      console.log("logout failed");
      stateSetter({
        status: "error",
        message: null,
        errorMessage:
          "There was an error logging you out. Please try again later",
      });
      setTimeout(() => navigate("/login"), 4000);
    }
  } catch (err) {
    console.log("Logout failed big: ", err);
  }
};
