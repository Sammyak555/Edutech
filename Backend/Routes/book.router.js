const { Router, json } = require("express");

const bookRouter = Router();

const { Bookmodel } = require("../Model/book.model");



bookRouter.get("/", async (req, res) => {
  try {
    const data = await Bookmodel.find();
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
});

bookRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const book = new Bookmodel(payload);
    await book.save();
    res.status(201).send("Book added successfully");
  } catch (err) {
    console.log(err);
  }
});

module.exports = {
  bookRouter,
};
