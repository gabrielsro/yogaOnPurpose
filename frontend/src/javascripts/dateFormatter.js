export default (date, size) => {
  const vw = window.innerWidth;
  const dateObject = new Date(date);
  if (size == "preview") {
    return dateObject.toLocaleString("en-US", {
      dateStyle: "full",
    });
  }
  if (size == "post") {
    return dateObject.toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    });
  }
  return dateObject.toLocaleString("en-US", {
    dateStyle: vw > 800 ? "full" : "short",
    timeStyle: "short",
  });
};
