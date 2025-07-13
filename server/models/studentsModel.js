const mongoose = require('mongoose');

const studentsModel = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  course: {
    type: String,
    required: true
  },
  fees: {
    type: Number
  },
  joining_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Students", studentsModel);