import { Router } from "express";
import items from "../controllers/items";
import authenticate from "../utils/sessions/authenticate";

const router = Router();

router.get("/", items.getItems);
router.get("/level", authenticate, items.getItemsForLevel);
router.get("/:itemId", items.getItem);
router.post("/", authenticate, items.createItem);
router.put("/", items.updateItem);
router.delete("/:itemId", items.deleteItem);

export default router;
