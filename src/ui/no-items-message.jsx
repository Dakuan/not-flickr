import React from "react";

let NoItemsMessage = React.createClass({

	render: function() {
		return (
			<div className="alert alert-info">No uploads <i className="fa fa-frown-o" /></div>
		);
	}

});

export default NoItemsMessage;
