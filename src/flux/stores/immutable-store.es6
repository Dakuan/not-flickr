import { Store } from 'flummox';

export class ImmutableStore extends Store {
  static assignState(oldState, newState) {
    return newState;
  }
}