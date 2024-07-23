const todoModel = require("../models/todoModel");

const getAll = async (req, res) => {
  try {
    const items = await todoModel.find({});
    return res.status(200).send(items);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Error", message: "Internal server error" });
  }
};

const addTodo = async (req, res) => {
  try {
    const { text } = req.body;
    const item = new todoModel({ text });
    console.log(item);
    await item.save();
    return res.status(201).send(item);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error", message: "Internal server error" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await todoModel.findByIdAndDelete(id);
    return res.status(200).send(item);
  } catch (error) {
    return res
      .status(500)
      .json({ Error: "error", message: "Internal server error" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await todoModel.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    return res.status(200).send(item);
  } catch (error) {
    return res
      .status(500)
      .json({ Error: "error", message: "Internal Server error" });
  }
};

module.exports = { getAll, addTodo, deleteTodo, updateTodo };
