const express = require("express");
const cors = require("cors");
require('dotenv').config();
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Task routes
app.use("/tasks", taskRoutes);

const port = 4321;

app.get("/", async (req, res) => {
    res.send("Server is running");
  });
app.listen(port, () => console.log(`Server running on port ${port}`));
