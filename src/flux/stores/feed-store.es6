import I from "immutable";
import ImmutableStore from "./immutable-store";
import { feedFactory } from "../../models/feed";

const defaultState = new I.Map({
  loading: false,
  tags: []
});

function keyGen (tags = []) {
  return `feed[${tags.join(":")}]`;
}

export default class FeedStore extends ImmutableStore {

  constructor(flux) {
    super();
    this.state = defaultState;
    this.actions = flux.getActions("feeds");
    const messageActionIds = flux.getActionIds("feeds");
    this.registerAsync(
      messageActionIds.fetchFeed,
      this._onFetchFeedBegin,
      this._onFetchFeedSuccess,
      this._onFetchFeedFail);
  }

  fetch(tags = []) {
    let key = keyGen(tags);
    let feed = this.state.get(key);
    if (feed) {
      return feed;
    } else if(!this.state.get("loading")) {
      this.actions.fetchFeed(tags);
    }
  }

  getFeed(tags = []) {
    return this.state.get(keyGen(tags));
  }

  _onFetchFeedBegin() {
    this.setState(this.state.set("loading", true));
  }

  _onFetchFeedSuccess(payload) {
    let key = keyGen(payload.tags);
    this.setState(this.state.set(key, feedFactory(payload.feed)).set("loading", false));
  }

  _onFetchFeedFail(err) {
    this.setState(this.state.set("loading", false));
    console.log(err.stack);
  }

  static deserialize(data) {
    return defaultState.set(keyGen(data.tags), feedFactory(data.feed));
  }

  static serialize(state) {
    return JSON.stringify(state.toJS());
  }
}
