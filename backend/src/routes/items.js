import { Router } from "express";
import items from "../controllers/items";

const router = Router();

router.get("/", items.getItems);
router.get("/:itemId", items.getItem);
router.post("/", items.createItem);
router.put("/", items.updateItem);
router.delete("/:itemId", items.deleteItem);

export default router;
