import React from "react";
import DefaultLayout from "../layouts/default-layout";
import FluxComponent from "flummox/component";
import Feed from "../feed";

export default class ItemsIndexPage extends React.Component {

	constructor () {
		super();
		this.componentWillMount = this.componentWillMount.bind(this);
	}

	componentWillMount () {
		this.props.flux.getStore("feeds").fetch();
	}

	render () {
		return (
			<DefaultLayout>
				<FluxComponent flux={this.props.flux} connectToStores={{
					feeds: store => {
						return {
							feed: store.state.get("feed"),
							loading: store.state.get("loading")
						};
					}
				}}>
					<Feed />
				</FluxComponent>
			</DefaultLayout>
		);
	}
}
