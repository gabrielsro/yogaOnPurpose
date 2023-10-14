const cloudName = "drkbr9f2j";
const cloudKey = "562967783543786";

export default async (action, stateSetter, editorRef) => {
  stateSetter({ status: "loading" });
  const formData = new FormData();
  let formDataObject = Object.fromEntries(formData);
  formDataObject.name = document.getElementById("itemName").value;
  formDataObject.price = document.getElementById("itemPrice").value;
  formDataObject.status = action;
  formDataObject.description = editorRef.current.getContent();

  //Pic handling:
  let images = [];
  const picInput = Array.from(document.querySelectorAll(".itemImageInput"));
  const loadedInputs = picInput.filter((input) => input.files.length > 0);

  if (loadedInputs.length > 0) {
    const pics = loadedInputs.map((input) => {
      return {
        picture: input.files[0],
        position: +input.getAttribute("name").match(/\d/)[0],
      };
    });

    const signatureResponse = await fetch(
      "http://localhost:3003/cdn-signature",
      {
        method: "GET",
        credentials: "include",
      },
    );

    if (!signatureResponse.ok) {
      stateSetter({
        status: "error",
        message: null,
        errorMessage: "CDN signature error. Please try again later",
      });
      setTimeout(() => stateSetter({ status: "loaded" }), 4000);
      return;
    }

    const signature = await signatureResponse.json();

    const cdnPicsData = pics.map((pic) => {
      const data = new FormData();
      data.append("file", pic.picture);
      data.append("api_key", cloudKey);
      data.append("signature", signature.signature);
      data.append("timestamp", signature.timestamp);
      return data;
    });

    const cdnPromises = cdnPicsData.map((data, index) => {
      const promise = new Promise((resolve, reject) => {
        fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
          method: "POST",
          body: data,
        })
          .then(async (response) => {
            if (!response.ok) {
              reject(
                "The CDN couldn't process your images. Please contact your provider",
              );
            }
            const responseJson = await response.json();
            console.log(responseJson);
            resolve({
              publicId: responseJson.public_id,
              version: responseJson.version,
              signature: responseJson.signature,
              position: index++,
            });
          })
          .catch((err) => {
            reject(console.log(err));
          });
      });
      return promise;
    });

    try {
      images = await Promise.all(cdnPromises);
    } catch (err) {
      console.log(err);
      stateSetter({
        status: "error",
        message: null,
        errorMessage: err
          ? err
          : "There was a client-side error uploading your images",
      });
      setTimeout(() => stateSetter({ status: "loaded" }), 4000);
      return;
    }
  }

  formDataObject.pics = images;
  const formDataString = JSON.stringify(formDataObject);

  try {
    const response = await fetch("http://localhost:3003/items", {
      method: "POST",
      credentials: "include",
      body: formDataString,
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      console.log(response);
      stateSetter({
        status: "error",
        message: null,
        errorMessage: "There was an error. Please try again later",
      });
      setTimeout(() => stateSetter({ status: "loaded" }), 4000);
      return;
    }
    if (response.ok) {
      if (action == "published") {
        stateSetter({
          status: "success",
          message: "Item successfully added to the store!",
          errorMessage: null,
        });
      }
      if (action == "draft") {
        stateSetter({
          status: "done",
          message: "Item saved as a draft",
          errorMessage: null,
        });
      }
      setTimeout(() => stateSetter({ status: "loaded" }), 2000);
    }
  } catch (err) {
    console.log(err);
  }
};
