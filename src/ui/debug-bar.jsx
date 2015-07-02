import React from "react";
import R from "ramda";
import classNames from "classnames";

let DebugBar = React.createClass({

	getInitialState: function() {
		return {
			replayDropOpen: false
		};
	},

	render: function() {
		return (
			R.ifElse(
				R.prop("debug"),
				R.always(
					<div className={"alert alert-info"} style={{marginBottom: "0px", marginLeft: "-15px", marginRight: "-15px"}}>
						<div>
							{
								R.ifElse(
									(props) => {
										return !!props.broadcastSocketId;
									},
									R.always(<span>Broadcasting on: {this.props.broadcastSocketId}</span>),
									R.always(<span>Connecting <i className="fa fa-spin fa-spinner"/></span>))(this.props)
							}
							<form
								className="col-sm-4 pull-right"
								onSubmit={this.props.listeningSocketId ? this._stop : this._start}>

								<div className="input-group" style={{marginRight: "-15px", marginTop: "-7px"}}>
									<input
										placeholder="Enter the channel id you want listen to"
										className="form-control"
										readOnly={this.props.listeningSocketId ? "readonly" : false}
										value={this.state.listenTo}
										onChange={this._onChange} />
									<span className="input-group-btn">
										<button className={classNames("btn", (this.props.listeningSocketId ? "btn-danger" : "btn-default"))}>
											&nbsp;
											<i className={classNames("fa", (this.props.listeningSocketId ? "fa-stop" : "fa-bug"))}/>
										</button>
									</span>
								</div>
							</form>
							<div className={classNames("col-sm-1", "pull-right", "dropdown", {open: this.state.replayDropOpen})} style={{textAlign: "right"}}>
								<a onClick={this._onReplayClick} href="#">
									<span className={classNames("badge", "badge-primary", (this.props.listeningSocketId ? "" : "hidden"))}>{this.props.actions.count()}</span>
								</a>
								<ul className="dropdown-menu">
									{
										this.props.actions.map((action) => {
											return (<li><a href="#">{action.actionId}</a></li>);
										})
									}
								</ul>
							</div>
						</div>
					</div>
				),
				R.always(<span />))(this.props)
		);
	},

	_onReplayClick: function(e) {
		e.preventDefault();
		this.setState({replayDropOpen: !this.state.replayDropOpen});
	},

	_onChange: function(e) {
		this.setState({listenTo: e.currentTarget.value});
	},

	_start: function(e) {
		e.preventDefault();
		this.props.flux.getActions("sockets").setListeningSocketId(this.state.listenTo);
		this.setState({listenTo: `Listening to ${this.state.listenTo}`});
	},

	_stop: function(e) {
		e.preventDefault();
		this.setState({listenTo: null});
		this.props.flux.getActions("sockets").stopListening();
	}
});

export default DebugBar;
