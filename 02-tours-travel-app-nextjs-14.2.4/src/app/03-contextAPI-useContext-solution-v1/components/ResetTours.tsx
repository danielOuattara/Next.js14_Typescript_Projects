import { useToursContext } from "../context/ToursContext";

export default function ResetTours() {
  const context = useToursContext();
  const fetchTours = context?.fetchTours || (() => {});
  return (
    <main>
      <div className="title">
        <p>context API + functions solution version 1</p>
        <h2>no tour left</h2>
        <button className="btn" onClick={() => fetchTours()}>
          refresh
        </button>
      </div>
    </main>
  );
}
