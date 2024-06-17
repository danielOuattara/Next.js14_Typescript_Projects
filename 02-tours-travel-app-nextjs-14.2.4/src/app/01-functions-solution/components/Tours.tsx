"use client";
import TourItem from "./TourItem";
import { useState } from "react";
import ResetTours from "./ResetTours";

type TypeProps = {
  toursProps: ITour[];
};

export default function Tours({ toursProps }: TypeProps) {
  const [tours, setTours] = useState<ITour[]>(toursProps);

  const removeTourItem = (id: string) =>
    setTours((tours) => tours.filter((item: ITour) => item.id !== id));

  const resetTours = () => setTours(() => toursProps);

  if (tours.length === 0) {
    return <ResetTours resetTours={resetTours} />;
  }

  return (
    <main>
      <section>
        {/* <Header /> */}
        {tours.map((item) => (
          <TourItem key={item.id} tour={item} removeTourItem={removeTourItem} />
        ))}
      </section>
    </main>
  );
}
