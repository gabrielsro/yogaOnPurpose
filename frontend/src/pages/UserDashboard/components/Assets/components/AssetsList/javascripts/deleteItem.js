export default async (asset, setAssetDelete) => {
  setAssetDelete({
    status: "question",
    message: `Do you want to permanently delete "${asset.name}"?`,
  });
};
