export default async (stateSetter, userSetter, navigate) => {
  stateSetter("loading");
  try {
    const logout = await fetch("http://localhost:3003/logout", {
      method: "POST",
      credentials: "include",
    });
    if (logout.ok) {
      stateSetter("success");
      setTimeout(() => {
        navigate("/login");
        stateSetter("loaded");
      }, 2000);
      userSetter(null);
    } else {
      console.log("logout failed");
    }
  } catch (err) {
    console.log("Logout failed big: ", err);
  }
};
