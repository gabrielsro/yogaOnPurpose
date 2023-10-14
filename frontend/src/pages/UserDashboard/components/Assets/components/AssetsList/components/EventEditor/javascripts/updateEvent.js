const cloudName = "drkbr9f2j";
const cloudKey = "562967783543786";

export default async (
  eventId,
  eventStatus,
  setEditorStatus,
  editorName,
  setEditorName,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  location,
  setLocation,
  mainImage,
  secondaryImage,
  content,
  setEventListState,
  setRecoveryContent,
) => {
  setEditorStatus({ status: "loading" });
  let data = {};

  if (mainImage || secondaryImage) {
    try {
      const signatureResponse = await fetch(
        "http://localhost:3003/cdn-signature",
        {
          method: "GET",
          credentials: "include",
        },
      );

      if (!signatureResponse.ok) {
        console.log(signatureResponse);
        setEditorStatus({ status: "error" });
        setEditorName(editorName);
        setStartDate(startDate);
        setEndDate(endDate);
        setLocation(location);
        setRecoveryContent(content);
        setTimeout(() => {
          setEditorStatus({ status: "loaded", error: true });
        }, 3000);
        return;
      }

      const signature = await signatureResponse.json();

      const main = mainImage?.files[0];
      const mainName = mainImage?.files[0]?.name;
      const secondary = secondaryImage?.files[0];
      const secondaryName = secondaryImage?.files[0].name;
      const images = [main, secondary];
      const imagesFiltered = images.filter((image) => image);
      console.log(imagesFiltered);

      const imagesData = imagesFiltered.map((image) => {
        const data = new FormData();
        data.append("file", image);
        data.append("api_key", cloudKey);
        data.append("signature", signature.signature);
        data.append("timestamp", signature.timestamp);
        return data;
      });

      console.log(imagesData);

      const promises = imagesData.map((data) => {
        const promise = new Promise((resolve, reject) => {
          fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: "POST",
            body: data,
          })
            .then(async (response) => {
              if (!response.ok) {
                reject("The CDN couln'd process your images");
              }

              const responseJson = await response.json();
              resolve({
                publicId: responseJson.public_id,
                version: responseJson.version,
                signature: responseJson.signature,
                name: Object.fromEntries(data).file.name,
              });
            })
            .catch((err) => reject(err));
        });
        return promise;
      });

      await Promise.all(promises)
        .then((result) => {
          result.forEach((r) => {
            if (r.name == mainName) {
              console.log(r.name);
              data.mainImage = r;
            }
            if (r.name == secondaryName) {
              console.log(r.name);
              data.secondaryImage = r;
            }
          });

          console.log(result);
        })
        .catch((err) => {
          console.log(err);
          setEditorStatus({ status: "error" });
          setEditorName(editorName);
          setStartDate(startDate);
          setEndDate(endDate);
          setLocation(location);
          setRecoveryContent(content);
          setTimeout(
            () => setEditorStatus({ status: "loaded", error: true }),
            2000,
          );
          return;
        });
    } catch (err) {
      console.log(err);
      setEditorStatus({ status: "error" });
      setTimeout(
        () => setEditorStatus({ status: "loaded", error: true }),
        3000,
      );
      return;
    }
  }

  data.name = editorName;
  data.dateStart = startDate;
  data.dateEnd = endDate;
  data.description = content;
  data.location = location;
  data.status = eventStatus;

  console.log(data);

  const dataString = JSON.stringify(data);

  console.log(dataString);

  try {
    const response = await fetch(`http://localhost:3003/events/${eventId}`, {
      method: "PUT",
      credentials: "include",
      body: dataString,
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      console.log(response);
      setEditorStatus({ status: "error" });
      setEditorName(editorName);
      setStartDate(startDate);
      setEndDate(endDate);
      setLocation(location);
      setRecoveryContent(content);
      setTimeout(
        () => setEditorStatus({ status: "loaded", error: true }),
        2000,
      );
      return;
    }

    setEditorStatus({ status: "success" });
    setTimeout(() => {
      setEditorStatus({ status: "loaded", success: true });
      setEventListState({ status: "loading" });
    }, 2000);
  } catch (err) {
    console.log(err);
    setEditorStatus({ status: "error" });
    setEditorName(editorName);
    setStartDate(startDate);
    setEndDate(endDate);
    setLocation(location);
    setRecoveryContent(content);
    setTimeout(() => setEditorStatus({ status: "loaded", error: true }), 2000);
  }
};
