import I from "immutable";
import ImmutableStore from "./immutable-store";

export default class SocketStore extends ImmutableStore {

  constructor(flux) {
    super();
    this.state = new I.Map();
    const actionIds = flux.getActionIds("sockets");
    this.register(actionIds.stopListening, this._onStop);
    this.register(actionIds.setBroadcastSocketId, this._onSetBroadcastSocketId);
    this.register(actionIds.setListeningSocketId, this._onSetListeningSocketId);
  }

  _onSetBroadcastSocketId(id) {
    this.setState(this.state.set("broadcastSocketId", id));
  }

  _onSetListeningSocketId(id) {
    this.setState(this.state.set("listeningSocketId", id));
  }

  _onStop() {
    this.setState(this.state.delete("listeningSocketId"));
  }

  static deserialize(d) {
    return new I.Map(d);
  }

  static serialize(state) {
    return JSON.stringify(state.toJS());
  }
}
