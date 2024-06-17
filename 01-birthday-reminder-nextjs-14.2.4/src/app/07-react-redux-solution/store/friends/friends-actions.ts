import {
  REMOVE_FRIEND,
  REMOVE_ALL_FRIENDS,
  RESET_ALL_FRIENDS,
} from "./friends-actions-type";

export function removeOneFriend(id: string) {
  return {
    type: REMOVE_FRIEND,
    payload: id,
  };
}

export function removeAllFriends() {
  return {
    type: REMOVE_ALL_FRIENDS,
  };
}

export function resetAllFriends() {
  return {
    type: RESET_ALL_FRIENDS,
  };
}
