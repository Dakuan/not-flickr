import React from "react/addons";
import R from "ramda";
import ItemsList from "./items-list";
import NoItemsMessage from "./no-items-message";

let curriedReact = R.curryN(2, React.createElement);

let isEmpty = (collection) => {
  return collection.isEmpty();
};

let Feed = React.createClass({

  propTypes: {
    loading: React.PropTypes.bool,
    feed: React.PropTypes.object
  },

  render: function() {
    return (
      R.ifElse(
        R.prop("loading"),
        R.always(<h2>Loading</h2>),
        (props) => {
          return (
            <div>
              <h2>{props.feed.title}</h2>
              {
                R.pipe(
                  R.path(["feed", "items"]),
                  R.ifElse(
                    isEmpty,
                    curriedReact(NoItemsMessage),
                    R.pipe(
                      R.createMapEntry("items"),
                      curriedReact(ItemsList))))(props)
              }
            </div>
          );
        }
      )(this.props)
    );
  }
});

export default Feed;
