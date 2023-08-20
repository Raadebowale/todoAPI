const Todo = require("../models/todo");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      statusCode: 200,
      statusMessage: "Success Finding All Todos",
      data: todos,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ statusCode: 500, message: "Internal server error" });
  }
};

exports.getSingleTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    res.status(200).json({
      statusCode: 200,
      statusMessage: "Success Finding Todo",
      data: todo,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ statusCode: 500, message: "Internal server error" });
  }
};

exports.postTodo = async (req, res) => {
  try {
    const title = req.body.title;
    const newTodo = await Todo.create({
      title: title,
    });
    res.status(201).json({
      statusCode: 201,
      statusMessage: "posted Todo Successfully",
      data: newTodo,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ statusCode: 500, message: "Internal server error" });
  }
};

exports.updateTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      statusCode: 200,
      statusMessage: "updated Todo Successfully",
      data: todo,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ statusCode: 500, message: "Internal server error" });
  }
};

exports.deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findByIdAndDelete(id);
    res
      .status(200)
      .json({ statusCode: 200, message: "Todo deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ statusCode: 500, message: "Internal server error" });
  }
};
