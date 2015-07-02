import express from "express";
import feedData from "../data/feeds-data";

let router = express.Router;
let route = router();

route.get("/api/feed", (req, res, next) => {
  feedData(req.query.tags).then((feed) => {
    res.json(feed);
  }, (err) => {
    next(err);
  });
});

module.exports = route;
