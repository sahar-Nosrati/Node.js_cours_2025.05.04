const express = require("express");
const CORS = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.port || 4500;

const approvedSearchAddress = [
  "http://localhost:4500/",
  "http://google.com",
  "http://127.0.0.1:5500",
];

const corsOption = {
  origin: (origin, callback) => {
    if (!origin || approvedSearchAddress.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("There is an error"));
    }
  },
  optionsSuccessStatus: 200,
  credential: true,
};

app.use(CORS(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", express.static(path.join(__dirname, "./public")));

app.use("/", require("./Route/root"));
app.use("/employees", require("./Route/api/employee"));



app.listen(PORT, (req, res) => {
  console.log("I have to study hard");
});
