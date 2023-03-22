const {Column} =require("../models")

const createList = async (req, res, next) => {
      try {
        const createColumn = await Column.create({
          ...req.body
        });
    
        res.json(createColumn);
      } catch (e) {
        next(e);
      }
    };

const getAllLists = async (req, res, next) => {
      try {
        const lists = await Column.find().populate("task").limit(6);
      
        console.log(lists)
        res.json({
          data: lists,
        });
      } catch (e) {
        next(e);
      }
    };
const deleteList = async (req, res, next) => {
      try {
        const { id } = req.params;
        const deleteColumn = await Column.deleteOne({ _id: id});
    
        res.json(deleteColumn);
      } catch (e) {
        next(e);
      }
    }

module.exports={
      createList,
      getAllLists,
      deleteList

}


