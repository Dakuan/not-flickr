import { Store } from "flummox";

export default class ImmutableStore extends Store {
  static assignState(oldState, newState) {
    return newState;
  }
}
