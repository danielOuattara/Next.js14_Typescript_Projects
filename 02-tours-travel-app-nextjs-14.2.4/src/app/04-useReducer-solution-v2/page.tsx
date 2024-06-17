"use client";

import FetchError from "./components/FetchError";
import Loading from "./components/Loading";
import ResetTours from "./components/ResetTours";
import Tours from "./components/Tours";
import useFetchTours from "./customHooks/useFetchTours";

export default function AppFunctionUseReducerV2() {
  const {
    isError,
    isLoading,
    tours,
    errorMessage,
    fetchTours,
    removeTourItem,
  } = useFetchTours();

  if (isError) {
    return <FetchError message={errorMessage} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return <ResetTours fetchTours={fetchTours} />;
  }

  return <Tours tours={tours} removeTourItem={removeTourItem} />;
}
