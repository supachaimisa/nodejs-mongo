const mongoose = require('mongoose');
const { Schema } = mongoose;

const Schema_ = new Schema({
  name:  String, 
  nation: String,
  detail:   String,
  date: { type: Date, default: Date.now },
  hidden: { type: Boolean, default: false },
});

module.exports = mongoose.model("Food", Schema_);