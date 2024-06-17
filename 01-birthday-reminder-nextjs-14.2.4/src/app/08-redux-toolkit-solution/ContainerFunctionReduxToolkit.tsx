"use client";

import { useAppSelector, useAppDispatch } from "./hooks";
import { friendsActions } from "./redux/features/friends/friends-slice";
import List from "./List";

//--------------------------------------------------------------

export default function ContainerFunctionReduxToolkit() {
  const dispatch = useAppDispatch();
  const { friends } = useAppSelector((state) => state.friends);
  return (
    <main>
      <section className="container">
        <List />

        {friends.length === 0 ? (
          <button onClick={() => dispatch(friendsActions.resetAllFriends())}>
            Refresh
          </button>
        ) : (
          <button onClick={() => dispatch(friendsActions.removeAllFriends())}>
            Clear all
          </button>
        )}
      </section>
    </main>
  );
}
