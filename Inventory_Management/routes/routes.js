const router = require("express").Router();
const item = require("../controller/controller");

router.post("/items",item.create);
router.get("/items",item.getAll);
router.patch('/items/:id',item.updateItem);
router.delete('/items/:id',item.deleteItem);

module.exports = router;
