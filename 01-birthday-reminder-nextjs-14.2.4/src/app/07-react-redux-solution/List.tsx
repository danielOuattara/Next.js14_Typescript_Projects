import { connect } from "react-redux";
import { removeOneFriend } from "./store/friends/friends-actions"; // optional 2
import { Dispatch } from "redux";
import Image from "next/image";

type TypeProps = {
  people: TypeFriendsReduxState;
  handleRemoveOnePerson: (id: string) => void;
};

function ListFunctionRedux({ people, handleRemoveOnePerson }: TypeProps) {
  const target = people.length > 1 ? `friends` : `friend`;
  return (
    <>
      {people.length > 0 && (
        <h2 className="text-2xl border-b-2 border-b-slate-500 my-4 pb-5 font-normal">
          {target} to contact
        </h2>
      )}

      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person article_styled">
            <Image
              src={person.image}
              alt={"picture of " + person.name}
              width={400}
              height={400}
            />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button
                className="btn_styled"
                onClick={() => handleRemoveOnePerson(id)}
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

const mapStateToProps = (state: TypeFriendsReduxState) => {
  return { people: state };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // option 1
    // handleRemoveOnePerson: (id: string) => {
    //   dispatch({ type: "REMOVE_FRIEND", payload: id });
    // },

    // option 2
    handleRemoveOnePerson: (id: string) => {
      dispatch(removeOneFriend(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListFunctionRedux);
