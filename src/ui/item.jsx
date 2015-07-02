import React from "react/addons";

let PureRenderMixin = React.addons.PureRenderMixin;

let Item = React.createClass({

  mixins: [PureRenderMixin],

  propTypes: {
    media: React.PropTypes.object
  },

  render: function() {
    return (
      <div className="flickr-item col-xs-6 col-sm-4 col-md-3">
        <img width={"200px"} src={this.props.media.m} className="thumbnail" />
      </div>
    );
  }
});

export default Item;
