import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Validate Item images:
export default (req, res, next) => {
  if (req.body.pics?.length > 0) {
    let expectedSignature;
    let picSignature;
    const valid = req.body.pics.every((pic) => {
      expectedSignature = cloudinary.utils.api_sign_request(
        {
          public_id: pic.publicId,
          version: pic.version,
        },
        process.env.CLOUDINARY_API_SECRET,
      );
      picSignature = pic.signature;
      return expectedSignature == pic.signature;
    });
    if (valid) {
      next();
      return;
    }
    if (!valid) {
      console.log("Failed image upload attempt: invalid CDN signature");
      console.log(`${expectedSignature} vs ${picSignature}`);
      res.sendStatus(500);
      return;
    }
  }
  if (req.body.pics?.length < 1) {
    next();
    return;
  }

  //Validate profile pic update image:
  if (req.body.profilePicUpdate) {
    const expectedSignature = cloudinary.utils.api_sign_request(
      {
        public_id: req.body.profilePicUpdate.publicId,
        version: req.body.profilePicUpdate.version,
      },
      process.env.CLOUDINARY_API_SECRET,
    );
    if (expectedSignature !== req.body.profilePicUpdate?.signature) {
      console.log("Failed profile pic update attempt: invalid CDN signature");
      console.log(
        `${expectedSignature} vs ${req.body.profilePicUpdate?.signature}`,
      );
      res.sendStatus(500);
      return;
    }
    req.body.profilePic = req.body.profilePicUpdate?.publicId;
    next();
    return;
  }

  //Validate Event images:
  if (req.body.mainImage?.publicId || req.body.secondaryImage?.publicId) {
    if (req.body.mainImage?.publicId) {
      const expectedSignature = cloudinary.utils.api_sign_request(
        {
          public_id: req.body.mainImage?.publicId,
          version: req.body.mainImage?.version,
        },
        process.env.CLOUDINARY_API_SECRET,
      );
      if (expectedSignature !== req.body.mainImage?.signature) {
        console.log("Failed main image upload attempt: invalid CDN signature:");
        console.log(`${expectedSignature} vs ${req.body.mainImage?.signature}`);
        res.sendStatus(500);
        return;
      }
    }

    if (req.body.secondaryImage?.publicId) {
      const expectedSignature = cloudinary.utils.api_sign_request(
        {
          public_id: req.body.secondaryImage?.publicId,
          version: req.body.secondaryImage?.version,
        },
        process.env.CLOUDINARY_API_SECRET,
      );
      if (expectedSignature !== req.body.secondaryImage?.signature) {
        console.log(
          "Failed secondary image upload attempt: invalid CDN signature",
        );
        console.log(
          `${expectedSignature} vs ${req.body.secondaryImage?.signature}`,
        );
        res.sendStatus(500);
        return;
      }
    }

    req.body.mainImage = req.body.mainImage?.publicId;
    req.body.secondaryImage = req.body.secondaryImage?.publicId;

    next();
    return;
  }

  next();
};
