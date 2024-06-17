import Image from "next/image";

type TypeProps = {
  dispatchFriends: React.Dispatch<TypeFriendsAction>;
  friendsState: TypeFriendsState;
};

export default function List({ dispatchFriends, friendsState }: TypeProps) {
  const handleRemoveOnePerson = (id: string) =>
    dispatchFriends({ type: "REMOVE_FRIEND", payload: id });

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
}
