import React from 'react';
import { Container } from 'semantic-ui-react';
import FriendListInput from '../../containers/FriendListInput';
import FriendList from '../../containers/FriendList';
import './FriendListContainer.css';

const FriendListContainer = () => {
  return (
    <Container
      text
      className="content"
    >
      <h1>Awesome Friend List</h1>
      <FriendListInput />
      <FriendList />
    </Container>
  );
};

export default FriendListContainer;
