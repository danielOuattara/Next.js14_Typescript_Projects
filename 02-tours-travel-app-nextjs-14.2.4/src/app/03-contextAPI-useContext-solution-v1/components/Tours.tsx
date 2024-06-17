import { useToursContext } from "./../context/ToursContext";
import TourItem from "./TourItem";

export default function Tours() {
  const context = useToursContext();
  const tours = context?.tours || [];
  return (
    <main>
      <section>
        {tours.map((tour) => {
          return <TourItem key={tour.id} tour={tour} />;
        })}
      </section>
    </main>
  );
}
