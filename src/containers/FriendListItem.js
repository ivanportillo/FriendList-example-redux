import { connect } from 'react-redux';

import { starFriend, removeFriend } from '../actions';

import FriendListItem from '../components/FriendListItem/FriendListItem';

const mapDispatchToProps = dispatch => ({
  starFriend: (friendId) => dispatch(starFriend(friendId)),
  removeFriend: (friendId) => dispatch(removeFriend(friendId)),
});

export default connect(null, mapDispatchToProps)(FriendListItem);
