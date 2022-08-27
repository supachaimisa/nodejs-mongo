const FoodModel = require("../models/food.model");
const mongoose = require("mongoose");

const foodController = {
  get: async (req, res) => {
    const id = mongoose.Types.ObjectId(req.query.id);
    try {
      if (id) {
        // get one
        const food = await FoodModel.findOne({ _id: id });
        res.send(food);
      } else {
        // get all
        const food = await FoodModel.find({});
        res.send(food);
      }
    } catch (error) {
      res.send(error);
    }
  },
  create: async (req, res) => {
    try {
      const tempFood = req.body;
      const food = new FoodModel(tempFood);
      food.save();
      const tempData = { _id: food._id, name: food.name, nation: food.nation, detail: food.detail }
      res.send({data: tempData, message: "Add a food"});
    } catch (error) {
      res.send(error);
    }
  },
  update: async (req, res) => {
    const id = mongoose.Types.ObjectId(req.query.id);
    const tempFood = req.body;
    try {
      const food = await FoodModel.findOneAndUpdate({ _id: id }, tempFood, { new: true });
      res.send({data: food, message:"Update the food"});
    } catch (error) {
      res.send(error);
    }
  },
  del: async (req, res) => {
    try {
        const id = mongoose.Types.ObjectId(req.query.id);
        const food = await FoodModel.deleteOne({ _id: id });
        if(!food) throw Error()
        res.send({...food, message: "delete the food"});
    } catch (error) {
        res.send(error);
    }
    
  },
};
module.exports = foodController;
