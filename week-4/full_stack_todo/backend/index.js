const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors");
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.get("/todos", async function (req, res) {
  try {
    const todos = await todo.find({});
    res.json({ todos: todos });
  } catch (error) {
    res.status(404).json({ msg: "Error found" });
  }
});

app.post("/todos", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({ msg: "You sent wrong inputs" });
    return;
  }
  try {
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });
    res.json({ msg: "Todo Created" });
  } catch (e) {
    res.status(404).json({ msg: "Error found" });
  }
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({ msg: "You sent wrong inputs" });
    return;
  }
  try {
    await todo.updateById(
      {
        _id: req.body.id,
      },
      {
        completed: true,
      }
    );
    res.json({ msg: "Updated Todo" });
  } catch (err) {
    res.status(404).json({ msg: "Error found" });
  }
});

app.listen(PORT, function () {
  console.log(`server started at ${PORT}`);
});
