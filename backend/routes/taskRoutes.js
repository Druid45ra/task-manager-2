const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// Route to get all tasks and create a new task
router.route("/").get(getTasks).post(createTask);

// Route to update and delete a task by ID
router.route("/:id").put(updateTask).delete(deleteTask);

module.exports = router;
