import { Flux } from "flummox";

import FeedActions from "./actions/feed-actions";
import FeedStore from "./stores/feed-store";

import TagActions from "./actions/tag-actions";
import TagStore from "./stores/tag-store";

export default class AppFlux extends Flux {

  constructor() {
    super();
    this.createActions("feeds", FeedActions);
    this.createActions("tags", TagActions);
    this.createStore("feeds", FeedStore, this);
    this.createStore("tags", TagStore, this);
  }
}
