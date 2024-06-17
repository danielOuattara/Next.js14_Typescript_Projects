type TypeFriendsContext = {
  friendsState: TypeFriendsState;
  dispatchFriends: React.Dispatch<TypeFriendsAction>;
};

type TypeFriendsState = {
  id: string;
  name: string;
  age: number;
  image: string;
}[];
