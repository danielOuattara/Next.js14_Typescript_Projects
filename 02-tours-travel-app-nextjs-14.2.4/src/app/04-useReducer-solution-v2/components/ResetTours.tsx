export default function ResetTours({ fetchTours }: TypeFetchTours) {
  return (
    <main>
      <div className="title">
        <p>useReducer hooks functions solution (version 1)</p>
        <h2>no tour left</h2>
        <button className="btn" onClick={fetchTours}>
          refresh
        </button>
      </div>
    </main>
  );
}
