"use client";

import { useReducer } from "react";
import data from "@/data";
import { friendsReducer } from "./reducers/friendsReducer";
import List from "./List";
import Counter from "@/components/Counter";

const initialState: TypeFriendsState = data;

export default function PageUseReducerFunctionSolution() {
  const [friendsState, dispatchFriends] = useReducer(
    friendsReducer,
    initialState,
  );

  const handleRemoveAllFriends = () =>
    dispatchFriends({ type: "REMOVE_ALL_FRIENDS" });

  const handleRefresh = () =>
    dispatchFriends({ type: "RESET_ALL_FRIENDS", payload: data });

  return (
    <main>
      <section className="container">
        <Counter length={friendsState.length} />
        <List dispatchFriends={dispatchFriends} friendsState={friendsState} />

        {friendsState.length === 0 ? (
          <button onClick={handleRefresh}> Refresh</button>
        ) : (
          <button onClick={handleRemoveAllFriends}> Clear all</button>
        )}
      </section>
    </main>
  );
}
