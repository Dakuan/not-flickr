import { Flux } from "flummox";

import FeedActions from "./actions/feed-actions";
import FeedStore from "./stores/feed-store";

import TagActions from "./actions/tag-actions";
import TagStore from "./stores/tag-store";

import SocketActions from "./actions/socket-actions";
import SocketStore from "./stores/sockets-store";

import ReplayActions from "./actions/replay-actions";
import ReplayStore from "./stores/replay-store";

import logger from "./middleware/logger";


export default class AppFlux extends Flux {

  constructor() {
    super();
    this.createActions("feeds", FeedActions);
    this.createActions("tags", TagActions);
    this.createActions("sockets", SocketActions);
    this.createActions("replay", ReplayActions);
    this.createStore("feeds", FeedStore, this);
    this.createStore("tags", TagStore, this);
    this.createStore("sockets", SocketStore, this);
    this.createStore("replay", ReplayStore, this);
    this.dispatcher.register(logger);
  }
}
