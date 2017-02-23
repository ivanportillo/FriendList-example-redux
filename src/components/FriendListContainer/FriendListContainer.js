import React from 'react';
import { Container } from 'semantic-ui-react';
import FriendListInput from '../FriendListInput/FriendListInput';
import FriendList from '../FriendList/FriendList';
import './FriendListContainer.css';

const FriendListContainer = ({ friends, addFriend, removeFriend, starFriend }) => {
  return (
    <Container
      text
      className="content"
    >
      <h1>Awesome Friend List</h1>
      <FriendListInput addFriend={addFriend} />
      <FriendList friends={friends} removeFriend={removeFriend} starFriend={starFriend}/>
    </Container>
  );
};

export default FriendListContainer;
