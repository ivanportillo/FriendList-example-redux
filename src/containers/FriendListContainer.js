import { connect } from 'react-redux';

import { addFriend, removeFriend, starFriend } from '../actions';

import FriendListContainer from '../components/FriendListContainer/FriendListContainer';

const mapStateToProps = state => ({
  friends: state.friends,
});

const mapDispatchToProps = dispatch => ({
  addFriend: (name) => dispatch(addFriend(name)),
  removeFriend: (id) => dispatch(removeFriend(id)),
  starFriend: (id) => dispatch(starFriend(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendListContainer);
