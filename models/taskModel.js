const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    dueDate: Date,
    priority: String,
    category: String,
    status: { type: String, default: "Pending" },
    reminder: { type: Boolean, default: false },
  },
  { collection: "tasks" }
);

module.exports = mongoose.model("Task", taskSchema);
