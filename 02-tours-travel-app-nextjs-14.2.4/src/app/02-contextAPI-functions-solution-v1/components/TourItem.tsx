import { useState } from "react";
import { ToursContext } from "./../context/ToursContext";
import Image from "next/image";

export default function TourItem({
  tour: { id, image, info, name, price },
}: ISingleTourPropsContext) {
  const [readMore, setReadMore] = useState(false);

  return (
    <ToursContext.Consumer>
      {(context) => {
        const removeTourItem = context?.removeTourItem || (() => {});
        return (
          <article className="single-tour">
            <Image
              src={image}
              alt={`${name} description`}
              width={400}
              height={400}
            />
            <footer>
              <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
              </div>
              <p>
                {readMore ? info : info.substring(0, 150) + " ..."}
                <button onClick={() => setReadMore(!readMore)}>
                  {readMore ? "show less" : "read more"}
                </button>
              </p>
              <button className="delete-btn" onClick={() => removeTourItem(id)}>
                remove this tour
              </button>
            </footer>
          </article>
        );
      }}
    </ToursContext.Consumer>
  );
}
