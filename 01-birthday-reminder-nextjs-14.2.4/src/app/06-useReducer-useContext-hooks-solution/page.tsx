/* n°1 : null initial context 
--------------------------------*/

// import List from "./ListFunctionContextAPI";
// import { useFriendsContext } from "./context/FriendsContext";
// import data from "./../data";
// import Header from "../components/Header";

// export default function PageUseReducerUseContext() {
//   const { friendsState = [], dispatchFriends = () => {} } =
//     useFriendsContext() || {};

//   const handleRemoveAllFriends = () => {
//     dispatchFriends({ type: "REMOVE_ALL_FRIENDS" });
//   };

//   const handleRefresh = () => {
//     dispatchFriends({ type: "RESET_ALL_FRIENDS", payload: data });
//   };

//   return (
//     <main>
//       <section className="container">
//         <Header
//           title={"useReducer + context API solution"}
//           length={friendsState.length}
//         />

//         <List />

//         {friendsState.length === 0 ? (
//           <button onClick={handleRefresh}> Refresh</button>
//         ) : (
//           <button onClick={() => handleRemoveAllFriends()}> Clear all</button>
//         )}
//       </section>
//     </main>
//   );
// }

//-----------------------------------------------------------------------------
/* n°2 : non null initial context 
---------------------------------*/

"use client";

import Counter from "@/components/Counter";
import List from "./List";
import { useFriendsContext } from "./context/FriendsContext";
import data from "@/data";

export default function PageUseReducerUseContext() {
  const { friendsState, dispatchFriends } = useFriendsContext();
  const handleRemoveAllFriends = () => {
    dispatchFriends({ type: "REMOVE_ALL_FRIENDS" });
  };

  const handleRefresh = () => {
    dispatchFriends({ type: "RESET_ALL_FRIENDS", payload: data });
  };
  return (
    <main>
      <section className="container">
        <Counter length={friendsState.length} />
        <List />

        {friendsState.length === 0 ? (
          <button onClick={handleRefresh}> Refresh</button>
        ) : (
          <button onClick={() => handleRemoveAllFriends()}> Clear all</button>
        )}
      </section>
    </main>
  );
}
