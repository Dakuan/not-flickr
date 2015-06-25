import { Actions } from "flummox";
import feedApi from "../../client/api/feed-api";

export default class FeedActions extends Actions {
	async fetchFeed(tags = []) {
		let resp = await feedApi.fetch(tags);
		return {
			feed: resp.data,
			tags: tags
		};
	}
}
