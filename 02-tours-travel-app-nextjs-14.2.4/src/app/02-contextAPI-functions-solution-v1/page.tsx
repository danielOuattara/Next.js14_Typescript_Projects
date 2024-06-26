"use client";

import Error from "./components/Error";
import Loading from "./components/Loading";
import ResetTours from "./components/ResetTours";
import Tours from "./components/Tours";
import { ToursContext } from "./context/ToursContext";

function Container() {
  return (
    <ToursContext.Consumer>
      {(context) => {
        // Use optional chaining to safely access context properties
        const isError = context?.isError || false;
        const loading = context?.isLoading || false;
        const tours = context?.tours || [];

        if (isError) {
          return <Error />;
        }

        if (loading) {
          return <Loading />;
        }

        if (tours.length === 0) {
          return <ResetTours />;
        }

        return <Tours />;
      }}
    </ToursContext.Consumer>
  );
}

export default Container;
