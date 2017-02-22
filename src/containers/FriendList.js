import { connect } from 'react-redux';

import FriendList from '../components/FriendList/FriendList';

const mapStateToProps = state => ({
  friends: state.friends,
});

export default connect(mapStateToProps, null)(FriendList);
