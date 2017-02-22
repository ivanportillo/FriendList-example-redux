import React, { Component } from 'react';
import { List, Button, Icon } from 'semantic-ui-react';

class FriendListItem extends Component{
  constructor(props){
    super(props);
    this.handleStar = this.handleStar.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleStar = (e, friendId) => {
    e.preventDefault();
    this.props.starFriend(friendId);
  };

  handleRemove = (e, friendId) => {
    e.preventDefault();
    this.props.removeFriend(friendId);
  };

  render(){
    const { friend } = this.props;
    return(
      <List.Item>
        <List.Content floated='right'>
          <Button icon color="yellow" onClick={(e) => this.handleStar(e, friend.id)}>
            <Icon name='star' />
          </Button>
          <Button icon color="blue" onClick={(e) => this.handleRemove(e, friend.id)}>
            <Icon name='trash' />
          </Button>
        </List.Content>
        <List.Icon name='star' color={friend.star ? 'yellow' : 'grey'} size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header>{friend.name}</List.Header>
        </List.Content>
      </List.Item>
    );
  }
}

export default FriendListItem;
