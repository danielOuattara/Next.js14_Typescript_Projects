type TypeFriendsReduxState = {
  id: string;
  name: string;
  age: number;
  image: string;
}[];

type REMOVE_FRIEND = "REMOVE_FRIEND";
type REMOVE_ALL_FRIENDS = "REMOVE_ALL_FRIENDS";
type RESET_ALL_FRIENDS = "RESET_ALL_FRIENDS";

type TypeFriendsReduxAction =
  | { type: REMOVE_FRIEND; payload: string }
  | { type: REMOVE_ALL_FRIENDS }
  | { type: RESET_ALL_FRIENDS; payload: TypeFriendsState };
