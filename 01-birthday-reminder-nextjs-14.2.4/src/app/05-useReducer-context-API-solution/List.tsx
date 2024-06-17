/* n°1 : null initial context 
--------------------------------*/

// import { FriendsContext } from "./context/FriendsContext";

// export default function List() {
//   return (
//     <FriendsContext.Consumer>
//       {(context) => {
//         const friendsState = context?.friendsState || [];
//         const dispatchFriends = context?.dispatchFriends || (() => {});

//         const handleRemoveOnePerson = (id: string) => {
//           dispatchFriends({ type: "REMOVE_FRIEND", payload: id });
//         };
//         return (
//           <>
//             {friendsState.length > 1 && (
//               <h2 className="h2_styled">friends to contact</h2>
//             )}
//             {friendsState.length === 1 && (
//               <h2 className="h2_styled">friend to contact</h2>
//             )}
//             {friendsState.map((person) => {
//               return (
//                 <article key={person.id} className="person article_styled">
//                   <img src={person.image} alt={person.name} />
//                   <div>
//                     <h4>{person.name}</h4>
//                     <p>{person.age} years</p>
//                     <button
//                       className="btn_styled"
//                       onClick={() => handleRemoveOnePerson(person.id)}
//                     >
//                       Event Finished
//                     </button>
//                   </div>
//                 </article>
//               );
//             })}
//           </>
//         );
//       }}
//     </FriendsContext.Consumer>
//   );
// }

/* n°2 : non null initial context 
---------------------------------*/

"use client";

import Image from "next/image";
import { FriendsContext } from "./context/FriendsContext";

export default function List() {
  return (
    <FriendsContext.Consumer>
      {(context) => {
        const { friendsState, dispatchFriends } = context;

        const handleRemoveOnePerson = (id: string) => {
          dispatchFriends({ type: "REMOVE_FRIEND", payload: id });
        };

        const target = friendsState.length > 1 ? `friends` : `friend`;
        return (
          <>
            {friendsState.length > 0 && (
              <h2 className="text-2xl border-b-2 border-b-slate-500 my-4 pb-5 font-normal">
                {target} to contact
              </h2>
            )}
            {friendsState.map((person) => {
              return (
                <article key={person.id} className="person article_styled">
                  <Image
                    src={person.image}
                    alt={"picture of " + person.name}
                    width={400}
                    height={400}
                  />
                  <div>
                    <h4>{person.name}</h4>
                    <p>{person.age} years</p>
                    <button
                      className="btn_styled"
                      onClick={() => handleRemoveOnePerson(person.id)}
                    >
                      Event Finished
                    </button>
                  </div>
                </article>
              );
            })}
          </>
        );
      }}
    </FriendsContext.Consumer>
  );
}
