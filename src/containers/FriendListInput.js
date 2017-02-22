import { connect } from 'react-redux';

import { addFriend } from '../actions';

import FriendListInput from '../components/FriendListInput/FriendListInput';

const mapDispatchToProps = dispatch => ({
  addFriend: (name) => dispatch(addFriend(name)),
});

export default connect(null, mapDispatchToProps)(FriendListInput);
