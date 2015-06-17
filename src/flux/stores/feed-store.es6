import I from "immutable";
import ImmutableStore from "./immutable-store";

const defaultState = new I.Map({
  loading: false
});

export default class FeedStore extends ImmutableStore {

  constructor(flux) {
    super();
    this.state = defaultState;
    this.actions = flux.getActions("feeds");
    const messageActionIds = flux.getActionIds("feeds");
    this.registerAsync(messageActionIds.fetchFeed, this._onFetchFeedBegin, this._onFetchFeedSuccess, this._onFetchFeedFail);
  }

  fetch() {
    var feed = this.state.get("feed");
    if (feed) {
      return feed;
    } else {
      this.actions.fetchFeed();
    }
  }

  _onFetchFeedBegin() {
    this.setState(this.state.set("loading", true));
  }

  _onFetchFeedSuccess(feed) {
    this.setState(this.state.set("feed", feed.data).set("loading", false));
  }

  _onFetchFeedFail(err) {
    console.log(err.stack);
  }

  static deserialize(d) {
    return defaultState.set("feed", d);
  }

  static serialize(state) {
    return JSON.stringify(state.toJS());
  }
}
