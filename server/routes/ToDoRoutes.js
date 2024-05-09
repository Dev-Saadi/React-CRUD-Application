const Router = require("express");
const { getTodos, saveTodos, updateTodos, deleteTodos } = require("../controllers/todoController");

const router = Router();

router.get("/get", getTodos);
router.post("/save", saveTodos);
router.put("/update/:iD", updateTodos);
router.delete("/delete/:iD", deleteTodos);

module.exports = router;