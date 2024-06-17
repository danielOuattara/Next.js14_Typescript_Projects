"use client";

import { useCallback, useEffect, useReducer } from "react";
import FetchError from "./components/FetchError";
import Loading from "./components/LoadingFunction";
import ResetTours from "./components/ResetTours";
import Tours from "./components/Tours";
import {
  REMOVE_ONE_TOUR,
  START_FETCH_TOURS,
  HANDLE_FETCH_ERROR,
  HANDLE_FETCH_SUCCESS,
  HANDLE_ERROR,
} from "./reducer/toursReducer";
import { toursReducer } from "./reducer/toursReducer";

const url = "https://www.course-api.com/react-tours-project";

const initialFetchToursState: IFetchToursState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  tours: [],
};

export default function PageUseReducer() {
  const [fetchToursState, dispatchFetchTours] = useReducer(
    toursReducer,
    initialFetchToursState,
  );

  const fetchTours = useCallback(async (): Promise<void | undefined> => {
    try {
      dispatchFetchTours({ type: START_FETCH_TOURS });
      const res = await fetch(url);
      if (!res.ok) {
        dispatchFetchTours({
          type: HANDLE_FETCH_ERROR,
          payload: `${res.status} ${res.statusText}`,
        });
        throw Error(`${res.status} ${res.statusText}`);
      }
      const toursData = await res.json();
      dispatchFetchTours({ type: HANDLE_FETCH_SUCCESS, payload: toursData });
    } catch (err) {
      if (err instanceof Error) {
        dispatchFetchTours({ type: HANDLE_ERROR });
        return undefined;
      }
    }
  }, []);

  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  const removeTourItem = (id: string) =>
    dispatchFetchTours({ type: REMOVE_ONE_TOUR, payload: id });

  if (fetchToursState.isError) {
    return <FetchError message={fetchToursState.errorMessage} />;
  }

  if (fetchToursState.isLoading) {
    return <Loading />;
  }

  if (fetchToursState.tours.length === 0) {
    return <ResetTours fetchTours={fetchTours} />;
  }

  return (
    <Tours tours={fetchToursState.tours} removeTourItem={removeTourItem} />
  );
}
