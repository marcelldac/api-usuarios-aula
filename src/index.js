const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user-routes.js");

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRouter);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
