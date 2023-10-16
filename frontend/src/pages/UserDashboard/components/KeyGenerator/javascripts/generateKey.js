export default async (e, setGeneratorStatus) => {
  e.preventDefault();
  setGeneratorStatus({ status: "loading" });
  const formData = new FormData(e.target);
  const formDataObject = Object.fromEntries(formData);
  try {
    const response = await fetch(
      `https://yogaonpurpose-production.up.railway.app/key/${formDataObject.level}`,
      {
        method: "GET",
        credentials: "include",
      },
    );
    if (!response.ok) {
      console.log(response);
      setGeneratorStatus({ status: "loaded", error: true });
      return;
    }
    const code = await response.json();
    setGeneratorStatus({ status: "loaded", success: true, data: code });
  } catch (err) {
    console.log(err);
    setGeneratorStatus({ status: "loaded", error: true });
  }
};
