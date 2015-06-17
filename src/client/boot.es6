import AppFlux from "../flux/flux";
import Router from "react-router";
import React from "react";
import routes from "../ui/routes";
import logger from "../flux/logger";

const data = document.getElementById("payload").value;

document.addEventListener("DOMContentLoaded", function() {
  const flux = new AppFlux(data);
  flux.deserialize(data);
  flux.dispatcher.register(logger);

  Router.run(routes, Router.HistoryLocation, function(Handler) {
    const app = React.createElement(Handler, {
      flux: flux
    });
    React.render(app, document.getElementById("app"));
  });
});
