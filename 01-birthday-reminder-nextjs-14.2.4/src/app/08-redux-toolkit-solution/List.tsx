import Image from "next/image";
import { useAppSelector, useAppDispatch } from "./hooks";
// import { useDispatch, useSelector } from "react-redux";
import { friendsActions } from "./redux/features/friends/friends-slice";

export default function ListFunctionReduxToolkit() {
  const dispatch = useAppDispatch();
  const { friends } = useAppSelector((state) => state.friends);

  return (
    <>
      {friends.length > 1 && <h2 className="h2_styled">friends to contact</h2>}
      {friends.length === 1 && <h2 className="h2_styled">friend to contact</h2>}
      {friends.map((person) => {
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
                onClick={() =>
                  dispatch(friendsActions.removeOneFriend(person.id))
                }
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
