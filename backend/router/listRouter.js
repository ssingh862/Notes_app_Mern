const express = require("express");
const router = express.Router();
const {
  list,
  getAll,
  deleteById,
  update,
} = require("../controllers/listContoller");

router.post("/list", list);
router.get("/allList", getAll);
router.delete("/deleteById/:id", deleteById);
router.put("/update/:id", update);

module.exports = router;
