const express = require("express");
const dotenv = require("dotenv");
const bodyPareser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const route = require("./server/routes/router");
const connectDB = require('./server/database/connecton');

dotenv.config({ path: "config.env" });
const port = process.env.PORT || 8080;
const app = express();

//log request
app.use(morgan("short"));

//mongodb connection
connectDB();

//parese request to body-parser
app.use(bodyPareser.urlencoded({extended:false}));

//set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



//load assets
app.use("/css", express.static(path.join(__dirname, "assets/css")));
app.use("/img", express.static(path.join(__dirname, "assets/img")));
app.use("/js", express.static(path.join(__dirname, "assets/js")));


//load route
app.use('/',route);

app.listen(port, "localhost", () =>
  console.log(`Server started at 3000 port   http://localhost:${port}`)
);
