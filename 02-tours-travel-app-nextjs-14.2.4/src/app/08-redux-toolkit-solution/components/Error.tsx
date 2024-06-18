"use client";

import { useAppSelector } from "../redux/hooks";

export default function Error() {
  const { errorMessage } = useAppSelector((state) => state.tours);
  return (
    <main>
      <div className="title">
        <h2>{errorMessage}</h2>
      </div>
    </main>
  );
}
