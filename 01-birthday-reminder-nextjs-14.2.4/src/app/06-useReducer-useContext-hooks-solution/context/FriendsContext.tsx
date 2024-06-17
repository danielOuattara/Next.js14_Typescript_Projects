/* n°1 : null initial context 
--------------------------------*/

// "use client";

// import { createContext, useReducer, useContext } from "react";
// import data from "@/data";
// import { friendsReducer } from "../reducers/friendsReducer";

// type TypeFriendsContext = {
//   friendsState: TypeFriendsState;
//   dispatchFriends: React.Dispatch<TypeFriendsAction>;
// };

// export const FriendsContext = createContext<TypeFriendsContext | null>(null);

// type TypeProps = {
//   children: React.ReactNode;
// };

// const initialState = data;

// export default function FriendsContextProvider({ children }: TypeProps) {
//   const [friendsState, dispatchFriends] = useReducer(
//     friendsReducer,
//     initialState,
//   );
//   return (
//     <FriendsContext.Provider value={{ friendsState, dispatchFriends }}>
//       {children}
//     </FriendsContext.Provider>
//   );
// }

//-----------------------------------------------------------------------------

/* n°2 : non null initial context 
---------------------------------*/

"use client";

import { createContext, useContext, useReducer } from "react";
import data from "@/data";
import { friendsReducer } from "../reducers/friendsReducer";

type TypeFriendsContext = {
  friendsState: TypeFriendsState;
  dispatchFriends: React.Dispatch<TypeFriendsAction>;
};

export const FriendsContext = createContext<TypeFriendsContext>({
  friendsState: [],
  dispatchFriends: () => {},
});

type TypeProps = {
  children: React.ReactNode;
};

const initialState = data;

export default function FriendsContextProvider({ children }: TypeProps) {
  const [friendsState, dispatchFriends] = useReducer(
    friendsReducer,
    initialState,
  );

  return (
    <FriendsContext.Provider value={{ friendsState, dispatchFriends }}>
      {children}
    </FriendsContext.Provider>
  );
}

//------------------------------------------------

export const useFriendsContext = () => useContext(FriendsContext);
