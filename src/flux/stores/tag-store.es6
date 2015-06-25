import I from "immutable";
import R from "ramda";
import ImmutableStore from "./immutable-store";

const defaultState = new I.Map({
  tags: new I.List(),
  new: ""
});

export default class TagStore extends ImmutableStore {

  constructor(flux) {
    super();
    this.state = defaultState;
    const actionIds = flux.getActionIds("tags");
    this.register(actionIds.update, this._onUpdate);
    this.register(actionIds.addTag, this._onAddTag);
    this.register(actionIds.removeTag, this._onRemoveTag);
  }

  _onUpdate(payload) {
    this.setState(this.state.set(payload.key, payload.value));
  }

  _onAddTag(tag) {
    const tags = this.state.get("tags");
    this.setState(this.state.set("tags", tags.push(tag)).set("new", ""));
  }

  _onRemoveTag(tag) {
    const tags = this.state.get("tags");
    this.setState(
      this.state.set(
        "tags",
        tags.filterNot(R.eq(tag))
      )
    );
  }

  static deserialize(d) {
    var tags = d || [];
    return defaultState.set("tags", I.fromJS(tags));
  }

  static serialize(state) {
    return JSON.stringify(state.toJS());
  }
}
