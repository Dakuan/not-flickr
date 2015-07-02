import React from "react";
import FluxComponent from "flummox/component";
import { State as RouterState } from "react-router";
import DefaultLayout from "../layouts/default-layout";
import TagInput from "../tag-input";
import DebugBar from "../debug-bar";
import Feed from "../feed";

let ItemsIndexPage = React.createClass({

	mixins: [RouterState],

	getInitialState: function() {
		return {
			tags: this.getQuery().tags
		};
	},

	componentWillMount: function() {
		let tagStore = this.props.flux.getStore("tags");
		tagStore.on("change", this._onTagChange);
	},

	componentWillUnmount: function() {
		let tagStore = this.props.flux.getStore("tags");
		tagStore.removeEventListener("change", this._onTagChange);
	},

	render: function() {
		return (
			<DefaultLayout>
				<FluxComponent flux={this.props.flux} connectToStores={{
					sockets: store => {
						return {
							broadcastSocketId: store.state.get("broadcastSocketId"),
							listeningSocketId: store.state.get("listeningSocketId"),
							debug: store.state.get("debug")
						};
					},
					replay: (store)=> {
						return {
							actions: store.state.get("actions")
						};
					}}}>
					<DebugBar />
				</FluxComponent>
				<FluxComponent flux={this.props.flux} connectToStores={{
					tags: (store) => {
						return {
							tags: store.state.get("tags").toJS(),
							new: store.state.get("new")
						};
					},
					feeds: (store) => {
						return {
							loading: store.state.get("loading")
						};
					}
				}}>
					<TagInput
						onChange={this.props.flux.getActions("tags").update}
						onAddTag={this.props.flux.getActions("tags").addTag}
						onRemoveTag={this.props.flux.getActions("tags").removeTag} />
				</FluxComponent>

				<FluxComponent flux={this.props.flux} connectToStores={{
					feeds: store => {
						return {
							feed: store.fetch(this.state.tags),
							loading: store.state.get("loading")
						};
					}
				}}>
					<Feed flux={this.props.flux} />
				</FluxComponent>

			</DefaultLayout>
		);
	},

	_onTagChange: function () {
		let tagStore = this.props.flux.getStore("tags");
		this.setState({
			tags: tagStore.state.get("tags")
		});
	}
});

export default ItemsIndexPage;
