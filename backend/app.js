const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb+srv://a10:a10@a10.antj5mz.mongodb.net/?retryWrites=true&w=majority&appName=a10";
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

const userRouter = require("./users/user.router");
app.use("/user", userRouter);

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDb");
    app.listen(8000, () => {
      console.log("Server Started!");
    });
  })
  .catch(() => console.log("Error connecting to MongoDb"));
