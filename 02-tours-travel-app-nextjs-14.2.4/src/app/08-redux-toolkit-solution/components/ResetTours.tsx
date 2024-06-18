"use client";

import { fetchTours } from "../redux/tours/tours-async-actions";
import { useAppDispatch } from "../redux/hooks";

export default function ResetTours() {
  const dispatchTours = useAppDispatch();

  return (
    <main>
      <div className="title">
        <p>react redux toolkit + functions solution</p>
        <h2>no tour left</h2>
        <button className="btn" onClick={() => dispatchTours(fetchTours())}>
          refresh
        </button>
      </div>
    </main>
  );
}
