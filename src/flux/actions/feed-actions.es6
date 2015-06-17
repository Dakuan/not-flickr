import { Actions } from "flummox";
import feedApi from "../../client/api/feed-api";

export default class FeedActions extends Actions {
	async fetchFeed() {
		return feedApi.fetch();
	}
}
