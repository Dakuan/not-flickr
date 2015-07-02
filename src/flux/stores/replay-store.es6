import I from "immutable";
import ImmutableStore from "./immutable-store";

export default class ReplayStore extends ImmutableStore {

  constructor(flux) {
    super();
    this.state = new I.Map({
      actions: new I.Stack()
    });
    const actionIds = flux.getActionIds("replay");
    this.register(actionIds.addReplayAction, this._onAddReplayAction);
  }

  _onAddReplayAction(action) {
    this.setState(this.state.set("actions", this.state.get("actions").unshift(action)));
  }
}
