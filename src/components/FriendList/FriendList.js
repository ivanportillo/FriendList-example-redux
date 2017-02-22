import React, { Component } from 'react';
import { Message, Header, List } from 'semantic-ui-react';
import FriendListItem from '../../containers/FriendListItem';

class FriendList extends Component{
  render(){
    const { friends } = this.props;
    const friendsComponents = friends.map((friend) => {
      return <FriendListItem friend={friend} key={friend.id} />;
    });
    if(!friends.length){
      return (
        <Message>
          <Header>You don't have friends :(</Header>
          Solve it adding a new friend using the input
        </Message>
      );
    }
    return (
      <List divided verticalAlign='middle' relaxed>
        {friendsComponents}
      </List>
    );
  }
}

export default FriendList;
