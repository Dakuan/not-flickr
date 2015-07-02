import React from "react";
import { RouteHandler } from "react-router";

export default class App extends React.Component {

  constructor () {
    super();
  }

  render () {
    return (
      <div>
        <RouteHandler {...this.props} />
      </div>
    );
  }
}
