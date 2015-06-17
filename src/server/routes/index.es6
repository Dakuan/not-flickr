import express from "express";
import renderSpa from "../util/render-spa";
import feedData from "../data/feeds-data";

let router = express.Router;

let route = router();

route.get("/", (req, res, next) => {
  feedData().then((feed) => {
    let d = {
      feeds: feed
    };
    renderSpa(res, d, req.originalUrl);
  }, (err) => {
    next(err);
  });
});

module.exports = route;
