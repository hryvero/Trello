const column = require("../models/column");
const Task =require("../models/task")

const createTask = async (req, res, next) => {
      try {

      const task= await Task.create({...req.body})
        
       res.json(task)
      } catch (e) {
        next(e);
      }
    };



const getAllTasks = async (req, res, next) => {
      try {
        
        const lists = await Task.find()
      
        res.json({
          data: lists,
        });
      } catch (e) {
        next(e);
      }
    };
    
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    let smth= await Task
    .findOne({ _id: id })
    .populate("column")
     // key to populate
  
 res.json(smth.toObject())
  } catch (e) {
    next(e);
  }
};
    
const updateTask = async (req, res, next) => {
      try {
        const { id } = req.params;
        const updateTask = await Task.findByIdAndUpdate(
          id,
          { $set: req.body },
          { new: true } 
        );

        console.log(updateTask)
    
        res.json(updateTask);
      } catch (e) {
        next(e);
      }
    };
    
    const deleteTask = async (req, res, next) => {
      try {
        const { id } = req.params;
        const deleteTask = await Task.deleteOne({ _id: id });
    
        res.json(deleteTask);
      } catch (e) {
        next(e);
      }
    }
    
    
    module.exports = {
      updateTask,
      deleteTask, 
      createTask,
      getAllTasks,
      getById
    };