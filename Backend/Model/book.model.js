const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    title: String,
    image: String,
    drivelink: String,
    subject: String,
    description: String,
});

const Bookmodel = mongoose.model("book", bookSchema);

module.exports = {
  Bookmodel,
};
