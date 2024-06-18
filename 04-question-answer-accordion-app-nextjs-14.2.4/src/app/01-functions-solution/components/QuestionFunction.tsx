"use client";

import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = (props: QuestionAnswerType) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleShowAnswer = () => {
    setShowAnswer(() => !showAnswer);
  };

  return (
    <article className="question">
      <header>
        <h4>{props.question}</h4>
        <button className="btn" onClick={toggleShowAnswer}>
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showAnswer && <p>{props.answer}</p>}
    </article>
  );
};

export default Question;
