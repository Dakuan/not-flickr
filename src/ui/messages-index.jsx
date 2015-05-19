import React from 'react';
import FluxComponent from 'flummox/component';
import Messages from './messages'
import MessageForm from './message-form'

export default class MessagesIndex extends React.Component {
  render() {
    return (
    	<FluxComponent flux={this.props.flux}>
    		<FluxComponent connectToStores={{
				  messages: store => {
				    return {messages: store.state.get('messages').data};
				  }
				}}>
    			<Messages />
    		</FluxComponent>
    		<MessageForm onSubmit={this.props.flux.getActions('messages').createMessage} />
    	</FluxComponent>
    )
  }
}