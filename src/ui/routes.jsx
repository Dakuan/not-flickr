/* eslint no-unused-vars:0 */
import { Route, DefaultRoute } from "react-router";
import React from "react";
import App from "./app";
import ItemsIndex from "./pages/items-index";

module.exports = (
  <Route name="app" path="/" handler={App}>
    <Route name="feed" handler={ItemsIndex} />
    <DefaultRoute handler={ItemsIndex} />
  </Route>
);
