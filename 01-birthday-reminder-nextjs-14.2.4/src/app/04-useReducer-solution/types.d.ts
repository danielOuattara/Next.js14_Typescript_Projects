type TypeFriendsState = {
  id: string;
  name: string;
  age: number;
  image: string;
}[];

type TypeFriendsAction =
  | { type: "REMOVE_FRIEND"; payload: string }
  | { type: "REMOVE_ALL_FRIENDS" }
  | { type: "RESET_ALL_FRIENDS"; payload: TypeFriendsState };
