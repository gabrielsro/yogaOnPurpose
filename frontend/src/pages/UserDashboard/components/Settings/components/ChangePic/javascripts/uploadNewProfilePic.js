const cloudName = "drkbr9f2j";
const cloudKey = "562967783543786";

export default async (event, stateSetter, setLoggedUser) => {
  event.preventDefault();
  const input = document.getElementById("newProfilePic");

  if (input.files.length > 0) {
    stateSetter({ status: "loading" });
    const pic = input.files[0];

    try {
      //Get signature
      const signatureResponse = await fetch(
        "https://api.yogaonpurpose.net/cdn-signature",
        {
          method: "GET",
          credentials: "include",
        },
      );

      if (!signatureResponse.ok) {
        console.log(response);
        stateSetter({ status: "loaded", error: true });
        return;
      }

      const signature = await signatureResponse.json();

      //Upload image to CDN
      const data = new FormData();
      data.append("file", pic);
      data.append("api_key", cloudKey);
      data.append("signature", signature.signature);
      data.append("timestamp", signature.timestamp);

      const cdnResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: data,
        },
      );

      if (!cdnResponse.ok) {
        console.log(response);
        stateSetter({ status: "loaded", error: true });
        return;
      }

      const cdn = await cdnResponse.json();

      //Upload image to backend
      const cdnPic = {
        publicId: cdn.public_id,
        version: cdn.version,
        signature: cdn.signature,
      };

      const userPic = new FormData();
      const userObject = Object.fromEntries(userPic);
      userObject.profilePicUpdate = cdnPic;
      const userPicString = JSON.stringify(userObject);

      const response = await fetch(
        "https://api.yogaonpurpose.net/users/profilePic",
        {
          method: "POST",
          credentials: "include",
          body: userPicString,
          headers: { "Content-Type": "application/json" },
        },
      );
      if (!response.ok) {
        console.log(response);
        stateSetter({ status: "loaded", error: true });
        return;
      }
      const user = await response.json();

      setLoggedUser(user);

      stateSetter({ status: "loaded", user: user });
    } catch (err) {
      console.log(err);
    }
  }
  return;
};
