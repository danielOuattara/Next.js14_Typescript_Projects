"use client";

import Image from "next/image";
import { useState } from "react";

export default function TourItem({ tour, removeTourItem }: ISingleTourProps) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <Image
        src={tour.image}
        alt={`${tour.name} description`}
        width={400}
        height={400}
      />

      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <h4 className="tour-price">${tour.price}</h4>
        </div>
        <p>
          {readMore ? tour.info : tour.info.substring(0, 100) + " ..."}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTourItem(tour.id)}>
          remove tour
        </button>
      </footer>
    </article>
  );
}
