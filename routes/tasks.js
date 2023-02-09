const express = require("express");
const {
  getAllTasks,
  postNewTask,
  getSingleTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks");
const router = express.Router();

router.route("/").get(getAllTasks).post(postNewTask);
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;
