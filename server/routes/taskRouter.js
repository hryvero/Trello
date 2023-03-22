const { Router } = require("express");

const taskRouter = Router();
const {taskController} = require('../controllers');

taskRouter.get("/", taskController.getAllTasks);

taskRouter.get("/:id", taskController.getById);

taskRouter.post("/", taskController.createTask);

taskRouter.put("/:id", taskController.updateTask);

taskRouter.delete("/:id", taskController.deleteTask)

module.exports=taskRouter