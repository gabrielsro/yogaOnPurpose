const cloudName = "drkbr9f2j";
const cloudKey = "562967783543786";

export default async (
  itemId,
  status,
  setEditorState,
  image1,
  image2,
  image3,
  image4,
  image5,
  name,
  price,
  description,
  setEventListState,
  setName,
  setPrice,
  setRecoveryContent,
) => {
  setEditorState({ status: "loading" });

  let newData = { status: status };

  //Picture detection:

  const imageInputs = [image1, image2, image3, image4, image5];
  const imageInputsDetected = imageInputs.map((image, index) => {
    let imgInfo = {};
    imgInfo.file = image?.files[0];
    imgInfo.name = image?.files[0]?.name;
    imgInfo.position = index;

    return imgInfo;
  });

  //Picture handling:

  if (imageInputsDetected.some((image) => image.file)) {
    try {
      //1. Get CDN signature:
      const signatureResponse = await fetch(
        "https://api.yogaonpurpose.net/cdn-signature",
        {
          method: "GET",
          credentials: "include",
        },
      );

      if (!signatureResponse.ok) {
        console.log(signatureResponse);
        setEditorState({ status: "error" });
        setTimeout(() => {
          setEditorState({ status: "loaded", error: true });
          setName(name);
          setPrice(price);
          setRecoveryContent(description);
        }, 3000);
        return;
      }

      const signature = await signatureResponse.json();

      console.log("signature", signature);

      //2. Setup formdata to send files and signature to CDN for individual image credentials:
      const loadedImages = imageInputsDetected.filter((image) => image.file);
      console.log("loadedImages", loadedImages);
      const imagePetitions = loadedImages.map((image) => {
        const data = new FormData();
        data.append("file", image.file);
        data.append("api_key", cloudKey);
        data.append("signature", signature.signature);
        data.append("timestamp", signature.timestamp);
        return data;
      });

      const petitionPromises = imagePetitions.map((petitionData) => {
        const promise = new Promise((resolve, reject) => {
          fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: "POST",
            body: petitionData,
          })
            .then(async (response) => {
              if (!response.ok) {
                console.log(response);
                reject("The CDN couldn't process your image");
              }

              const imageCredentials = await response.json();
              resolve({
                publicId: imageCredentials.public_id,
                version: imageCredentials.version,
                signature: imageCredentials.signature,
                name: Object.fromEntries(petitionData).file.name,
              });
            })
            .catch((err) => reject(err));
        });

        return promise;
      });

      const credentialsReady = await Promise.all(petitionPromises)
        .then((credentials) => credentials)
        .catch((err) => {
          console.log(err);
          setEditorState({ status: "error" });
          setTimeout(() => {
            setEditorState({ status: "loaded", error: true });
            setName(name);
            setPrice(price);
            setRecoveryContent(description);
          }, 3000);
        });

      //3. Assign CDN processed images to new data for backend:
      let imagesWithPosition = [];
      imageInputsDetected.forEach((input) => {
        credentialsReady.forEach((credential) => {
          if (credential.name == input.name) {
            credential.position = input.position;
            imagesWithPosition.push(credential);
          }
        });
      });
      console.log(imagesWithPosition);

      //4. Add images to newData for backend update:
      newData.pics = imagesWithPosition;
    } catch (err) {
      console.log(err);
    }
  }

  //backend upload:

  //1. Add user-provided data to newData:
  newData.name = name;
  newData.price = price;
  newData.description = description;

  const newDataString = JSON.stringify(newData);
  console.log(newDataString);

  //2. Upload newData to backend

  try {
    const response = await fetch(
      `https://api.yogaonpurpose.net/items/${itemId}`,
      {
        method: "PUT",
        credentials: "include",
        body: newDataString,
        headers: { "Content-Type": "application/json" },
      },
    );

    if (!response.ok) {
      console.log(response);
      setEditorState({ status: "error" });
      setTimeout(() => {
        setEditorState({ status: "loaded", error: true });
        setName(name);
        setPrice(price);
        setRecoveryContent(description);
      }, 3000);
    }

    setEditorState({ status: "success" });
    setTimeout(() => {
      setEventListState({ status: "loading" });
      setEditorState({ status: "loaded", success: true });
    }, 2500);
  } catch (err) {
    console.log(err);
  }
};
