import React from "react/addons";
import I from "immutable";
import Item from "./item";

var masonryMixin;

let masonryOptions = {
	gutter: 0,
	itemSelector: ".flickr-item"
};

if(typeof document === "undefined") {
	masonryMixin = function() {};
} else {
	masonryMixin = require("react-masonry-mixin");
}

const ItemsList = React.createClass({

	mixins: [masonryMixin("masonryContainer", masonryOptions)],

	propTypes: {
		items: React.PropTypes.instanceOf(I.List).isRequired
	},

	getDefaultProps: function() {
		return {
			items: []
		};
	},

	render: function() {
		return (
			<div className="row" ref="masonryContainer">
				{
					this.props.items.map((item, index) => {
						return (<Item {...item.toJS()} key={index} />);
					})
				}
			</div>
		);
	}

});

export default ItemsList;
