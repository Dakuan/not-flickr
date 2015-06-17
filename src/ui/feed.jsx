import React from "react";
import R from "ramda";
import Item from "./item";

export default class Feed extends React.Component {

	render () {
		return (
			R.ifElse(
				R.prop("loading"),
				R.always(<h1>Loading</h1>),
				(props) => {
					return (
						<div>
							<h1>{props.feed.title}</h1>
							<div className="row">
								{
									props.feed.items.map((item, index) => { return (<Item {...item} key={index} />); })
								}
							</div>
						</div>
					);
				}
			)(this.props)
		);
	}
}
