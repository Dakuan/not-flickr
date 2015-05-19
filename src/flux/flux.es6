import { Flux } from 'flummox';
import { MessageActions } from './actions/message-actions';
import { MessageStore } from './stores/message-store';

export class AppFlux extends Flux {

  constructor() {
    super();

    this.createActions('messages', MessageActions);
    this.createStore('messages', MessageStore, this);
  }

}