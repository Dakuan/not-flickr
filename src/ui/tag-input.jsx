import React from "react/addons";
import R from "ramda";
import classNames from "classnames";
import { Navigation, State as RouterState } from "react-router";
import Tag from "./tag";

let TagInput = React.createClass({

  mixins: [Navigation, RouterState],

  propTypes: {
    loading: React.PropTypes.bool,
    new: React.PropTypes.string,
    tags: React.PropTypes.array,
    onChange: React.PropTypes.func.isRequired,
    onAddTag: React.PropTypes.func.isRequired,
    onRemoveTag: React.PropTypes.func.isRequired
  },

  getDefaultProps: () => {
    return {
      tags: [],
      loading: false
    };
  },

  render: function() {
    let inputClasses = classNames("form-control", "tag-field", {disabled: this.props.loading});
    let submitClasses = classNames("btn", "btn-primary", {disabled: this.props.loading});
    return (
      <div className="tag-input">
        <div className="row">
          <form onSubmit={this._onSubmit} method="POST">
            <div className="col-sm-6">
              <div className="input-group">
                <input name="tag" id="tag" disabled={this.props.loading} className={inputClasses} onChange={this._onInputChange} value={this.props.new} />
                <span className="input-group-btn">
                  <button className={submitClasses}>
                    &nbsp;
                    <i className="fa fa-tags"/>
                  </button>
                </span>
              </div>
            </div>
            <div className="col-sm-6 tags">
              {
                this.props.tags.map((tag, index) => {
                  return (
                    <Tag loading={this.props.loading} key={index} tag={tag} onRemove={this._onRemove(tag)}/>
                  );
                }.bind(this))
              }
            </div>
          </form>
        </div>
      </div>
    );
  },

  _onSubmit: function(e) {
    e.preventDefault();
    this.props.onAddTag(this.props.new);
    let tags = [this.props.new].concat(this.props.tags);
    var q = this.getQuery();
    this.transitionTo("app", {}, R.merge(q, {tags: tags}));
  },

  _onRemove: function(tag) {
    return () => {
      this.props.onRemoveTag(tag);
      let tags = R.filter((t) => { return t !== tag; }, this.props.tags);
      var q = this.getQuery();
      this.transitionTo("app", {}, R.merge(q, {tags: tags}));
    };
  },

  _onInputChange: function(e) {
    this.props.onChange("new", e.target.value);
  }
});

export default TagInput;
