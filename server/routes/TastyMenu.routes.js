const express = require("express");
const router = express.Router();
const { TastyMenuController } = require("../controllers/TastyMenu.controller");

router.get("/", TastyMenuController.getAll);
router.get("/:id", TastyMenuController.getById);
router.post("/", TastyMenuController.add);
router.delete("/:id", TastyMenuController.deleteById);

module.exports = router;
