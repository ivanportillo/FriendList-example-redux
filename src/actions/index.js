import {
  ADD_FRIEND,
  REMOVE_FRIEND,
  STAR_FRIEND
} from './const';

export function addFriend(friend){
  return {
    type: ADD_FRIEND,
    friend,
  };
}

export function removeFriend(id){
  return {
    type: REMOVE_FRIEND,
    id,
  };
}

export function starFriend(id){
  return {
    type: STAR_FRIEND,
    id,
  };
}
