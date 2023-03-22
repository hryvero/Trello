const { Router } = require("express");

const columnRouter = Router();
const {columnController} = require('../controllers');

columnRouter.get("/", columnController.getAllLists);

columnRouter.post("/", columnController.createList);

columnRouter.delete("/:id", columnController.deleteList)

module.exports=columnRouter