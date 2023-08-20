const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoute");

const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.use("/api/v1/todos", todoRoutes);
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected Successfully!"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 4220, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
