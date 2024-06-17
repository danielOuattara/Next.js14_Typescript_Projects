"use client";

import Counter from "@/components/Counter";
import List from "./List";
import {
  removeAllFriends,
  resetAllFriends,
} from "./store/friends/friends-actions"; // optional 2
import { connect } from "react-redux";
import { Dispatch } from "redux";

type TypeContainerProps = {
  people: TypeFriendsReduxState;
  handleRemoveAllFriends: () => void;
  handleResetAllFriends: () => void;
};

function ContainerFunctionRedux({
  people,
  handleRemoveAllFriends,
  handleResetAllFriends,
}: TypeContainerProps) {
  return (
    <main>
      <section className="container">
        <Counter length={people.length} />
        <List />

        {people.length === 0 ? (
          <button onClick={handleResetAllFriends}> Refresh</button>
        ) : (
          <button onClick={() => handleRemoveAllFriends()}> Clear all</button>
        )}
      </section>
    </main>
  );
}

const mapStateToProps = (state: TypeFriendsReduxState) => {
  return { people: state };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // option 1
    // handleRemoveAllFriends: () => {
    //   dispatch({ type: "REMOVE_ALL_FRIENDS" });
    // },

    //option 2
    handleRemoveAllFriends: () => dispatch(removeAllFriends()),

    handleResetAllFriends: () => dispatch(resetAllFriends()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerFunctionRedux);
