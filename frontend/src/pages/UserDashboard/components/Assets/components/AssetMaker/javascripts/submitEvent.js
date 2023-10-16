const cloudName = "drkbr9f2j";
const cloudKey = "562967783543786";

export default async (action, stateSetter, editorRef) => {
  stateSetter({
    status: "loading",
  });
  const formData = new FormData();
  let formDataObject = Object.fromEntries(formData);
  formDataObject.name = document.getElementById("eventName").value;
  formDataObject.dateStart = document.getElementById("eventDate").value;
  formDataObject.dateEnd = document.getElementById("eventDateFinish").value;
  formDataObject.location = document.getElementById("eventLocation").value;
  formDataObject.status = action;
  formDataObject.organizers = [];
  formDataObject.description = editorRef.current.getContent();

  const mainImage =
    document.getElementById("mainImage").files.length > 0
      ? document.getElementById("mainImage").files[0]
      : null;
  const secondaryImage =
    document.getElementById("secondaryImage").files.length > 0
      ? document.getElementById("secondaryImage").files[0]
      : null;

  //Image handling:
  if (mainImage || secondaryImage) {
    let mainImageName;
    let secondaryImageName;
    let signature;
    let uploads;

    mainImage
      ? (mainImageName = document.getElementById("mainImage").files[0].name)
      : undefined;

    secondaryImage
      ? (secondaryImageName =
          document.getElementById("secondaryImage").files[0].name)
      : undefined;

    const signatureResponse = await fetch(
      "https://yogaonpurpose-production.up.railway.app/cdn-signature",
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
    signature = await signatureResponse.json();

    formDataObject.mainImage = {
      publicId: undefined,
      signature: undefined,
    };
    formDataObject.secondaryImage = {
      publicId: undefined,
      signature: undefined,
    };

    const imagesFiltered = [mainImage, secondaryImage].filter((img) =>
      img ? true : false,
    );

    const imgsReady = imagesFiltered.map((img) => {
      const data = new FormData();
      data.append("file", img);
      data.append("api_key", cloudKey);
      data.append("signature", signature.signature);
      data.append("timestamp", signature.timestamp);
      return data;
    });

    const imgPromises = imgsReady.map((img) => {
      const promise = new Promise((resolve, reject) => {
        fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
          method: "POST",
          body: img,
        })
          .then(async (response) => {
            if (!response.ok) {
              reject(
                "The CDN couldn't process your images. Please contact your provider",
              );
            }
            const responseJson = await response.json();
            resolve({
              publicId: responseJson.public_id,
              version: responseJson.version,
              signature: responseJson.signature,
              name: Object.fromEntries(img).file.name,
            });
          })
          .catch((err) => {
            reject(console.log(err));
          });
      });
      return promise;
    });

    try {
      uploads = await Promise.all(imgPromises);

      formDataObject.mainImage.publicId = uploads.filter(
        (upload) => upload.name == mainImageName,
      )[0]?.publicId;
      formDataObject.mainImage.version = uploads.filter(
        (upload) => upload.name == mainImageName,
      )[0]?.version;
      formDataObject.mainImage.signature = uploads.filter(
        (upload) => upload.name == mainImageName,
      )[0]?.signature;

      formDataObject.secondaryImage.publicId = uploads.filter(
        (upload) => upload.name == secondaryImageName,
      )[0]?.publicId;
      formDataObject.secondaryImage.version = uploads.filter(
        (upload) => upload.name == secondaryImageName,
      )[0]?.version;
      formDataObject.secondaryImage.signature = uploads.filter(
        (upload) => upload.name == secondaryImageName,
      )[0]?.signature;
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

  const formDataString = JSON.stringify(formDataObject);
  console.log(formDataString);

  try {
    const response = await fetch(
      "https://yogaonpurpose-production.up.railway.app/events",
      {
        method: "POST",
        credentials: "include",
        body: formDataString,
        headers: { "Content-Type": "application/json" },
      },
    );
    if (!response.ok) {
      console.log(response);
      stateSetter({
        status: "error",
        message: null,
        errorMessage: "There was an error. Please try again later",
      });
      setTimeout(() => stateSetter({ status: "loaded" }), 3000);
      return;
    }
    if (action == "published") {
      stateSetter({
        status: "success",
        message: "Event published successfully!",
        errorMessage: null,
      });
    }
    if (action == "draft") {
      stateSetter({
        status: "done",
        message: "Event saved as a draft",
        errorMessage: null,
      });
    }
    setTimeout(() => stateSetter({ status: "loaded" }), 2000);
  } catch (err) {
    console.log(err);
  }
};
