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
    res.sendStatus(500);
  }
}
async function getItems() {}

async function getItemsForLevel(req, res) {
  try {
    const items = await Item.find();
    res.json({ items });
  } catch (err) {
    res.sendStatus(500);
  }
}

async function getItem() {}
async function updateItem() {}
async function deleteItem() {}
