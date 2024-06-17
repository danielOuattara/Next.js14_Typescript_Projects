/* n°1 : null initial context 
--------------------------------*/
// "use client";

// import List from "./List";
// import { FriendsContext } from "./context/FriendsContext";
// import data from "./../data";
// import Header from "../components/Header";

// export default function PageUseReducerContextAPIFunction() {
//   return (
//     <FriendsContext.Consumer>
//       {(context) => {
//         const friendsState = context?.friendsState || [];
//         const dispatchFriends = context?.dispatchFriends || (() => {});

//         const handleRemoveAllFriends = () =>
//           dispatchFriends({ type: "REMOVE_ALL_FRIENDS" });

//         const handleRefresh = () =>
//           dispatchFriends({ type: "RESET_ALL_FRIENDS", payload: data });

//         return (
//           <main>
//             <section className="container">
//               <Header
//                 length={friendsState.length}
//                 title={" useReducer + context API solution"}
//               />

//               <List />

//               {friendsState.length === 0 ? (
//                 <button onClick={handleRefresh}> Refresh</button>
//               ) : (
//                 <button onClick={() => handleRemoveAllFriends()}>
//                   {" "}
//                   Clear all
//                 </button>
//               )}
//             </section>
//           </main>
//         );
//       }}
//     </FriendsContext.Consumer>
//   );
// }

//-----------------------------------------------------------------------------
/* n°2 : non null initial context 
---------------------------------*/

"use client";

import List from "./List";
import { FriendsContext } from "./context/FriendsContext";
import data from "@/data";

import Counter from "@/components/Counter";

export default function PageUseReducerContextAPIFunction() {
  return (
    <FriendsContext.Consumer>
      {(context) => {
        const { friendsState, dispatchFriends } = context;

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
                <button onClick={() => handleRemoveAllFriends()}>
                  {" "}
                  Clear all
                </button>
              )}
            </section>
          </main>
        );
      }}
    </FriendsContext.Consumer>
  );
}
