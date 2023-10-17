export default async (e, setPreviewWarning) => {
  e.preventDefault();
  setPreviewWarning({ status: "question" });
};
