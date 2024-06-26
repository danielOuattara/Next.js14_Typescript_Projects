"use client";

import { useState } from "react";
import people from "@/data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkIndex = (argIndex: number) => {
    if (argIndex > people.length - 1) {
      return 0;
    } else if (argIndex < 0) {
      return people.length - 1;
    } else {
      return argIndex;
    }
  };

  const getPreviousQuote = () => {
    return setIndex((index) => checkIndex(index - 1));
  };

  const getNextQuote = () => {
    return setIndex((index) => checkIndex(index + 1));
  };

  const getRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex = checkIndex(randomIndex - 1);
    }
    return setIndex(() => randomIndex);
  };

  return (
    <article className="review">
      <div className="img-container">
        <Image
          src={image}
          alt={name}
          className="person-img"
          width={400}
          height={400}
        />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={getPreviousQuote}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={getNextQuote}>
          <FaChevronRight />
        </button>
      </div>
      <div className="button-container">
        <button className="random-btn" onClick={getRandomQuote}>
          surprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
