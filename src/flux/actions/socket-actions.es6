import { Actions } from "flummox";

export default class SocketActions extends Actions {

  setBroadcastSocketId(id) {
    return id;
  }

  setListeningSocketId(id) {
    return id;
  }

  stopListening() {
    return true;
  }
}
