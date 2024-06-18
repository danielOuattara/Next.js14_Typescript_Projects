"use client";

import TourItemFunction from "./TourItemFunction";
import { useAppSelector } from "../redux/hooks";

export default function Tours() {
  const { tours } = useAppSelector((state) => state.tours);

  return (
    <main>
      <section>
        <div className="title">
          <div>
            {tours.map((tour) => {
              return <TourItemFunction key={tour.id} tour={tour} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
