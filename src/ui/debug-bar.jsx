import React from "react";

let DebugBar = React.createClass({

	render: function() {
		return (
			<div className={"alert alert-info " + (this.props.socketId ? "" : "hidden")} style={{marginBottom: "0px", marginLeft: "-15px", marginRight: "-15px"}}>
				Debug token: {this.props.socketId}
			</div>
		);
	}
});

export default DebugBar;
