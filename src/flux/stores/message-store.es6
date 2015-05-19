import { Store } from 'flummox';
import  I  from 'immutable';
import { ImmutableStore } from './immutable-store';

let MessageStoreState = I.Record({
  messages: {}
});

export class MessageStore extends ImmutableStore {

  constructor(flux) {
    super(); 

    const messageActionIds = flux.getActionIds('messages');
    this.register(messageActionIds.createMessage, this.handleNewMessage);
    this.state = new MessageStoreState();
  }

  handleNewMessage(message) {
    let msgs = this.state.get('messages');
    msgs.data.push(message);
    this.setState(this.state.set('messages', msgs));
  }

  static deserialize (d) {
    var s = new MessageStoreState();
    return s.set('messages', d);
  }
  
  static serialize(state) {
    return JSON.stringify(state.toJS());
  }
}