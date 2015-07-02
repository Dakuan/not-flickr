import React from "react/addons";
import classNames from "classnames";

let PureRenderMixin = React.addons.PureRenderMixin;

let Tag = React.createClass({

  mixins: [PureRenderMixin],

  propTypes: {
    loading: React.PropTypes.bool,
    onRemove: React.PropTypes.func.isRequired,
    tag: React.PropTypes.string.isRequired
  },

  render: function () {
    const removeTagClasses = classNames("label-close", {disabled: this.props.loading});
    const tagClasses = classNames("animated", "fadeInDown", "tag", "label", this.props.loading ? "label-default" : "label-info", {disabled: this.props.loading});
    return (
      <span className={tagClasses}>
        {this.props.tag} <a className={removeTagClasses} onClick={this._onClick}><i className="fa fa-times-circle" /></a>
      </span>
    );
  },

  _onClick: function (e) {
    e.preventDefault();
    if(!this.props.loading) {
      this.getDOMNode().className += " fadeOutUp";
      setTimeout(() => {
        this.props.onRemove(e);
      }, 500);
    }
  }
});

export default Tag;
