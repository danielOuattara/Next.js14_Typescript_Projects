type TypeProps = {
  resetTours: () => void;
};

export default async function ResetTours({ resetTours }: TypeProps) {
  return (
    <main>
      <div className="title">
        <h2>no tour left</h2>
        <button className="btn" onClick={() => resetTours()}>
          refresh tours
        </button>
      </div>
    </main>
  );
}
