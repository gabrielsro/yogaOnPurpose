import Item from "../models/item";
import Picture from "../models/picture";

export default {
  createItem,
  getItems,
  getItem,
  getItemsForLevel,
  updateItem,
  deleteItem,
};

async function createItem(req, res) {
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
    const items = await Item.find().sort({ createdAt: -1 });
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
async function updateItem() {}
async function deleteItem() {}
