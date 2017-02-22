import {
  ADD_FRIEND,
  REMOVE_FRIEND,
  STAR_FRIEND
} from '../actions/const';

import lodash from 'lodash';

const initState = {
  friends: [{
    id: 1,
    name: 'Abradolph Lincler',
    star: true
  },{
    id: 2,
    name: 'Mr. Meeseks',
    star: false
  },{
    id: 3,
    name: 'Jerry Sanchez',
    star: false
  }]
};

export default function data(state = initState, action) {
  switch(action.type) {
    case ADD_FRIEND:
      const newId = state.friends.length ? state.friends[state.friends.length-1].id + 1 : 0;
      return {
        ...state,
        friends: state.friends.concat({ id: newId, name: action.friend }),
      };
    case REMOVE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter((friend) => { return friend.id !== action.id }),
      };
    case STAR_FRIEND:
      return {
        ...state,
        friends: state.friends.map((friend) => {
          return friend.id === action.id ?
            lodash.assign({}, friend, { star: !friend.star }) :
            friend
        }),
      };
    default:
      return state;
  }
}
