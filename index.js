
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");

//Middleware for all

app.use(express.json({limit:"10mb"}));
app.use(morgan("common"));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.get("/", (req, res) => {
  res.send("ok tested");
});


app.listen(4000, () => {
  console.log("listening on port 4000");
});
