import React from "react/addons";

let PureRenderMixin = React.addons.PureRenderMixin;

let Item = React.createClass({

	mixins: [PureRenderMixin],

	propTypes: {
		media: React.PropTypes.object
	},

	render: function() {
		let style = {
			background: `url("${this.props.media.m}") no-repeat center`
		};

		return (
			<div className="col-xs-6 col-sm-4 col-md-3 flickr-item">
				<div className="thumbnail" style={style} />
			</div>
		);
	}
});

export default Item;
