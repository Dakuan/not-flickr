import { Actions } from 'flummox';

export class MessageActions extends Actions {

  createMessage(messageContent) {
    return {
      content: messageContent,
      date: Date.now(),
    };
  }

}
