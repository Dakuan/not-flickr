import express from "express";
import path from "path";
import indexRoute from "./routes/index";
import apiRoute from "./routes/api";
import bodyParser from "body-parser";

let app = express();

// view engine
app.set("views", "src/server/views/");
app.set("view engine", "jade");

// public
app.use("/public", express.static(path.join(__dirname, "../../build")));
app.use("/public", express.static(path.join(__dirname, "../../assets/images")));

// middleware
app.use(bodyParser.urlencoded({
  extended: true
}));

// routes
app.use(apiRoute);
app.use(indexRoute);

// this function needs an arity of 4 to work
/*eslint no-unused-vars:0 */
app.use((err, req, res, next) => {
	console.log(err);
  res.send(err.stack);
});

module.exports = app;
