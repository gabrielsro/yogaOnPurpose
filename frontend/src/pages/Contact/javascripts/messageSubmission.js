export default (stateSetter) => {
  const form = document.querySelector(".contactForm form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    stateSetter({ status: "loading" });
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData);
    const formDataJson = JSON.stringify(formDataObject);
    const response = await fetch("http://localhost:3003/contact", {
      method: "POST",
      body: formDataJson,
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (!response.ok) {
      stateSetter({ status: "error" });
      console.log(response);
      const responseJson = await response.json();
      console.log(responseJson);
      setTimeout(() => stateSetter({ status: "loaded" }), 2000);
      return;
    }
    stateSetter({ status: "success" });
    setTimeout(() => stateSetter({ status: "loaded" }), 2500);
  });
};
