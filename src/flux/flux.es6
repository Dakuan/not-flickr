import { Flux } from "flummox";
import FeedActions from "./actions/feed-actions";
import FeedStore from "./stores/feed-store";

export default class AppFlux extends Flux {

  constructor() {
    super();
    this.createActions("feeds", FeedActions);
    this.createStore("feeds", FeedStore, this);
  }
}
