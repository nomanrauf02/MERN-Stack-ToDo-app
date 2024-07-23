const { Router } = require("express");
const router = Router();
const {
  addTodo,
  getAll,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

router.post("/add", addTodo);
router.get("/getAll", getAll);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodo);

module.exports = router;
