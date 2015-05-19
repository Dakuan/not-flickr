import React from 'react';

export default class MessageList extends React.Component {
  
  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this._onClick = this._onClick.bind(this);
    this.state = {};
  }

  render() {
    return (        
      <form>
        <input value={this.state.text} onChange={this._onChange} />
        <input value="add message" type="submit" onClick={this._onClick} />
      </form>      
    )
  }

  _onChange (evt) {
    this.setState({text: evt.target.value});
  }

  _onClick (evt) {
    evt.preventDefault();
    this.setState({text: null});
    this.props.onSubmit(this.state.text);
  }
}