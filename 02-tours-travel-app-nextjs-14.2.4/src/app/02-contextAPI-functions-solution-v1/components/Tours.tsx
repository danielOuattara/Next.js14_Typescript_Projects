import Header from "@/components/Header";
import { ToursContext } from "./../context/ToursContext";
import TourItem from "./TourItem";

export default function Tours() {
  return (
    <ToursContext.Consumer>
      {(context) => {
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
      }}
    </ToursContext.Consumer>
  );
}
