import express from "express";
import path from "path";
import indexRoute from "./routes/index";
import apiRoute from "./routes/api";

let app = express();

// view engine
app.set("views", "src/server/views/");
app.set("view engine", "jade");

app.use("/public", express.static(path.join(__dirname, "../../build")));
app.use("/public", express.static(path.join(__dirname, "../../assets/images")));

app.use(indexRoute);
app.use(apiRoute);

/*eslint no-unused-vars:0 */
app.use((err, req, res, next) => {
  res.send(err);
});

module.exports = app;
