import React from 'react';

export default class MessageList extends React.Component {
  render() {
    return (        
    	<ul>
    		{
    			this.props.messages.map((msg, i)=> {
    				return <li key={i}>{msg.content}</li>
    			})
    		}
    	</ul>        
    )
  }
}