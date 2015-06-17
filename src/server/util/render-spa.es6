import React from "react";
import Router from "react-router";
import AppFlux from "../../flux/flux";
import routes from "../../ui/routes";

export function renderSpa(res, data, path) {
  var fx = new AppFlux();
  fx.deserialize(JSON.stringify(data));
  Router.run(routes, path, function(Handler) {
    var handlerFactory = React.createFactory(Handler);
    var html = React.renderToString(handlerFactory({
      flux: fx
    }));
    res.render("index", {
      app: html,
      data: JSON.stringify(data)
    });
  });
}

module.exports = renderSpa;
