import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async (IDs) => {
  if (!Array.isArray) {
    return;
  }
  if (Array.isArray(IDs) && IDs.length < 1) {
    return;
  }

  const promises = IDs.map((id) => {
    const promise = new Promise((resolve, reject) => {
      cloudinary.uploader
        .destroy(id)
        .then(resolve)
        .catch((err) => reject(err));
    });
    return promise;
  });

  await Promise.all(promises).catch((err) => console.log(err));

  return;
};
