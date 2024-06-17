"use client";

import Error from "./components/Error";
import Loading from "./components/Loading";
import ResetTours from "./components/ResetTours";
import Tours from "./components/Tours";
import { useToursContext } from "./context/ToursContext";

function Container() {
  // Use optional chaining to safely access context properties
  const context = useToursContext();
  const isError = context?.isError || false;
  const isLoading = context?.isLoading || false;
  const tours = context?.tours || [];

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return <ResetTours />;
  }

  return <Tours />;
}

export default Container;
