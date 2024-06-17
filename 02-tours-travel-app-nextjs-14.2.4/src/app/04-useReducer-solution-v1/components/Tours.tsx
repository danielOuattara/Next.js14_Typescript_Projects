import TourItem from "./TourItem";

export default function Tours({ tours, removeTourItem }: TypeToursProps) {
  return (
    <main>
      <section>
        {tours.map((tour) => (
          <TourItem key={tour.id} tour={tour} removeTourItem={removeTourItem} />
        ))}
      </section>
    </main>
  );
}
