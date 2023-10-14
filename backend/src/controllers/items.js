import Item from "../models/item";
import Picture from "../models/picture";
import deleteImages from "../utils/cdn/deleteImages";

export default {
  createItem,
  getItems,
  getItem,
  getItemsForLevel,
  updateItem,
  deleteItem,
};

async function createItem(req, res) {
  req.body.uploader = req.user._id;
  req.body.uploaderName = `${req.user.firstName} ${req.user.lastName}`;

  try {
    const newItem = new Item(req.body);
    if (req.body.pics.length > 0) {
      newItem.thumbnail = req.body.pics[0].publicId;
    }
    const savedItem = await newItem.save();
    if (req.body.pics.length > 0) {
      const picPromises = req.body.pics.map((pic) => {
        const picPromise = new Promise((resolve, reject) => {
          const newPic = new Picture({
            item: savedItem._id,
            cdnId: pic.publicId,
            position: pic.position,
          });
          newPic
            .save()
            .then((saved) => resolve(saved))
            .catch((err) => reject(err));
        });
        return picPromise;
      });
      await Promise.all(picPromises).then(async (result) => {
        const sortedResult = result.sort((a, b) => {
          return a.position - b.position;
        });
        const finalResult = sortedResult.map((s) => s._id);
        await Item.findByIdAndUpdate(savedItem._id, { pictures: finalResult });
      });
    }
    if (req.body.pics.length < 1) {
      await newItem.save();
    }
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    console.log(req.body);
    res.sendStatus(500);
  }
}
async function getItems(req, res, next) {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json({ items });
    next();
  } catch (err) {
    res.sendStatus(500);
  }
}

async function getItemsForLevel(req, res) {
  try {
    const items = await Item.find()
      .populate("pictures")
      .sort({ createdAt: -1 });
    res.json({ items });
  } catch (err) {
    res.sendStatus(500);
  }
}

async function getItem(req, res, next) {
  try {
    const item = await Item.findById(req.params.itemId).populate("pictures");
    res.json(item);
    next();
  } catch (err) {
    res.sendStatus(500);
    next();
  }
}
async function updateItem(req, res, next) {
  //If pics detected, create pics:
  if (Array.isArray(req.body.pics) && req.body.pics.length > 0) {
    const picPromises = req.body.pics.map((pic) => {
      const promise = new Promise((resolve, reject) => {
        const newPic = new Picture({
          cdnId: pic.publicId,
          item: req.params.itemId,
          position: pic.position,
        });
        newPic
          .save()
          .then((result) => resolve(result))
          .catch((err) => reject(err));
      });
      return promise;
    });

    //Add newly created pics to req.body.pictures:
    req.body.pictures = await Promise.all(picPromises)
      .then((saved) => saved)
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
        return;
      });
  }

  try {
    //If user uploaded pictures, update req.body accordingly:
    if (req.body.pictures && Array.isArray(req.body.pictures)) {
      const targetItem = await Item.findById(
        req.params.itemId,
        "pictures",
      ).populate("pictures");

      const targetPictures = targetItem.pictures;
      let toBeDeleted = [];
      console.log("New", req.body.pictures);
      console.log("Current", targetPictures);

      if (targetPictures.length > 0) {
        //Replace if on same position
        targetPictures.forEach((c) => {
          req.body.pictures.forEach((n) => {
            if (c.position == n.position) {
              toBeDeleted.push(c.cdnId);
              return;
            }
          });
        });
        //Include if on different position
        targetPictures.forEach((c) => {
          if (req.body.pictures.every((n) => n.position !== c.position)) {
            req.body.pictures.push(c);
          }
        });
      }

      console.log("toBeDeleted", toBeDeleted);
      console.log("newPicsForThisItem:", req.body.pictures);

      toBeDeleted.length > 0 && deleteImages(toBeDeleted);

      //Sort pictures and assign thumbnail picture:
      if (req.body.pictures.length > 0) {
        if (req.body.pictures.length > 1) {
          req.body.pictures.sort((a, b) => {
            return a.position - b.position;
          });
        }
        req.body.thumbnail = req.body.pictures[0].cdnId;
      }
    }

    //Update Item

    await Item.findOneAndUpdate({ _id: req.params.itemId }, req.body);

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
    next();
  }
}
async function deleteItem() {}
