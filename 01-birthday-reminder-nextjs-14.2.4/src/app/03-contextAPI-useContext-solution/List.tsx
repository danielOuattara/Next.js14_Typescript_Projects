"use client";

import Image from "next/image";
import { useFriendContext } from "./context/FriendsContext";

export default function List() {
  const { people = [], handleRemoveOnePerson = () => {} } =
    useFriendContext() || {};

  const target = people.length > 1 ? `friends` : `friend`;
  return (
    <>
      {people.length > 0 && (
        <h2 className="text-2xl border-b-2 border-b-slate-500 my-4 pb-5 font-normal">
          {target} to contact
        </h2>
      )}
      {people.map((person) => {
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
                onClick={() => handleRemoveOnePerson(person.id)}
                className="btn_styled"
              >
                Event Finished
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
}
