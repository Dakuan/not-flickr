import express from "express";
import renderSpa from "../util/render-spa";
import feedData from "../data/feeds-data";

let router = express.Router;

let route = router();

route.get("/", (req, res, next) => {
  feedData(req.query.tags).then((feed) => {
    let d = {
      feeds: {
        feed: feed,
        tags: req.query.tags || []
      },
      tags: req.query.tags
    };
    try {
      renderSpa(res, d, req.originalUrl);
    } catch (e) {
      next(e);
    }
  }, (err) => {
    next(err);
  });
});

route.post("/", (req, res) => {
  res.redirect(`/?tags[]=${req.body.tag}`);
});

module.exports = route;
