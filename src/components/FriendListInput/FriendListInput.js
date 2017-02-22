import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class FriendListInput extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ newFriend: e.target.value });
  }

  handleSubmit = (e) => {
    this.props.addFriend(this.state.newFriend);
  }

  render(){
    return(
      <div>
        <Input
          action={{ color: 'red', labelPosition: 'right', icon: 'user', content: 'Add Friend', onClick: this.handleSubmit }}
          fluid
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default FriendListInput;
