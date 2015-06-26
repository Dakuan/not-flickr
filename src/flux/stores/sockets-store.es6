import I from "immutable";
import ImmutableStore from "./immutable-store";

export default class SocketStore extends ImmutableStore {

  constructor(flux) {
    super();
    this.state = new I.Map();
    const actionIds = flux.getActionIds("sockets");
    this.register(actionIds.setSocketId, this._onSetSocket);
  }

  _onSetSocket(id) {
  	this.setState(this.state.set("id", id));
  }
}
