const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const  { notfoundHandler, errorHandler } = require("./middlewares/common/errorHandler");

const app = express();
dotenv.config();

// db connection 
mongoose
    .connect(process.env.MONGO_LINK, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    .then(() => console.log('Database Connection Successful!!!'))
    .catch((err) => console.log(err))

// view engine setup 
app.set("view engine", "ejs");

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set static path 
app.use(express.static(path.join(__dirname, "public")))

// cookie parser
app.use(cookieParser())

// routing setup

// 404 handling
app.use(notfoundHandler)

// Common error handler
app.use(errorHandler);


app.listen(process.env.PORT, ()=>{
    console.log(`App is running on Port: ${process.env.PORT}`);
})