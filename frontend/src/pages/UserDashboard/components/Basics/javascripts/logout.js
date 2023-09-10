export default async (stateSetter, userSetter, navigate) => {
  stateSetter({ status: "loading", petition: "logout" });
  try {
    const logout = await fetch("http://localhost:3003/logout", {
      method: "POST",
      credentials: "include",
    });
    if (logout.ok) {
      stateSetter({ status: "success", petition: "logout" });
      setTimeout(() => navigate("/login"), 2000);
      userSetter(null);
    } else {
      console.log("logout failed");
    }
  } catch (err) {
    console.log("Logout failed big: ", err);
  }
};
