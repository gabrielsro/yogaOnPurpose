export default async (userId, setPreviewState, setPreviewWarning) => {
  setPreviewWarning({ status: "off" });
  setPreviewState({ status: "loading" });
};
