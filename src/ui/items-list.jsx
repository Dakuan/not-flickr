import React from "react/addons";
import I from "immutable";
import Item from "./item";

var ItemsList = React.createClass({

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
			<div className="row">
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
