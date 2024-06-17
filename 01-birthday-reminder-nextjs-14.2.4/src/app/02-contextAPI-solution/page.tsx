"use client";

import Counter from "@/components/Counter";
import List from "./List";
import { FriendsContext } from "./context/FriendsContext";

export default function PageContextAPIFunctionSolution() {
  return (
    <FriendsContext.Consumer>
      {(context) => {
        // Use optional chaining to safely access context properties
        const people = context?.people || [];
        const handleRefresh = context?.handleRefresh || (() => {});
        const handleClearAll = context?.handleClearAll || (() => {});

        const quantity = people.length > 1 ? "birthdays" : "birthday";
        return (
          <main>
            <section className="container">
              <Counter length={people.length} />
              <List />
              {people.length === 0 ? (
                <button onClick={handleRefresh}> Refresh</button>
              ) : (
                <button onClick={() => handleClearAll()}> Clear all</button>
              )}
            </section>
          </main>
        );
      }}
    </FriendsContext.Consumer>
  );
}

/* n°2 : non null initial context 
---------------------------------*/

// "use client";

// import List from "./List";
// import { FriendsContext } from "./context/FriendsContext";

// export default function Container() {
//   return (
//     <FriendsContext.Consumer>
//       {(context) => {
//         const { people, handleRefresh, setPeople } = context;
//         const quantity = people.length > 1 ? "birthdays" : "birthday";
//         return (
//           <main>
//             <section className="container">
//               <span> context API + functions solution</span>
//               {people.length >= 0 && (
//                 <h3>
//                   {people.length} {quantity} today
//                 </h3>
//               )}

//               <List />
//               {
//                 people.length === 0 ? (
//                   <button onClick={handleRefresh}> Refresh</button>
//                 ) : (
//                   <button onClick={() => setPeople([])}> Clear all</button>
//                 );
//               }
//             </section>
//           </main>
//         );
//       }}
//     </FriendsContext.Consumer>
//   );
// }
