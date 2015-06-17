import React from "react";

export default class Item extends React.Component {

	render () {
		// this isn't a faux pax in React land believe it or not.
		let style = {
			height: "200px",
			background: `url("${this.props.media.m}") no-repeat center`,
			backgroundSize: "cover"
		};

		return (
			<div className="col-xs-6 col-sm-4 col-md-3" key={this.props.id}>
				<div className="thumbnail" style={style} />
			</div>
		);
	}
}
