import Item from "../models/item";

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
    await newItem.save();
    res.sendStatus(200);
  } catch (err) {
    console.log(req.body);
    console.log(err);
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
    const item = await Item.findById(req.params.itemId);
    res.json(item);
    next();
  } catch (err) {
    res.sendStatus(500);
    next();
  }
}
async function updateItem() {}
async function deleteItem() {}
