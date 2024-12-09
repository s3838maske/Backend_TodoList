// server.js
const express = require("express");
const connectToDatabase = require("./db");
const userRouter = require("./routes/userRoute");

const app = express();
app.use(express.json()); //Middelware

const port = 5000;

// connection of database
connectToDatabase.connect();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api", userRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
