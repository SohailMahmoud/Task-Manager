const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must write a name"],
    trim: true,
    maxlength: [20, "Name can not be more than 20 charaters"]
  },
  completed: {
    type: Boolean,
    default: false
  }
})



module.exports = mongoose.model("Task", TaskSchema)