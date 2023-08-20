const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// Get All Todos
router.get("/", todoController.getAllTodos);

// Get Single Todo
router.get("/:id", todoController.getSingleTodo);

// Post Todo
router.post("/", todoController.postTodo);

// Update Todo
router.patch("/:id", todoController.updateTodo);

// Delete Todo
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
