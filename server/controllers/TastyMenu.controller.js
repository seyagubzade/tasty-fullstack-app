const { TastyMenu } = require("../models/TastyMenu.model");

const TastyMenuController = {
  getAll: async (req, res) => {
    try {
      const data = await TastyMenu.find({});
      res.status(200).send(data);
    } catch (err) {
      res.status(404).send(err);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const target = await TastyMenu.findById(id);
      res.status(200).send(target);
    } catch (err) {
      res.status(404).send(err);
    }
  },
  add: async (req, res) => {
    try {
        const { title, desc, image, price, category } = req.body;
        console.log(title, desc, image, price, category )
      const newProd = new TastyMenu({ title, desc, image, price, category });
      await newProd.save()
      res.send(newProd).status(200)
    } catch (err) {
      res.status(404).send(err);
    }
  },
  deleteById: async (req, res) => {
    try {
      const { id } = req.params;
      await TastyMenu.findByIdAndDelete(id);
      const data = await TastyMenu.find({})
      res.status(200).send(data);
    } catch (err) {
      res.status(404).send(err);
    }
  },
};


module.exports = {TastyMenuController}