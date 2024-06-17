import TourItemFunction from "./TourItem";

export default function Tours({ tours, removeTourItem }: TypeToursProps) {
  return (
    <main>
      <section>
        <div className="title">
          <p>useReducer hooks functions solution (version 1)</p>
          <h2>our tours</h2>
          <div className="underline"></div>
          <div>
            {tours.map((tour) => (
              <TourItemFunction
                key={tour.id}
                tour={tour}
                removeTourItem={removeTourItem}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
