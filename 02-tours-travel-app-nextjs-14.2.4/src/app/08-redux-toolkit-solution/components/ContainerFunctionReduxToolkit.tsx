"use client";

import Error from "./Error";
import Loading from "./LoadingFunction";
import ResetTours from "./ResetTours";
import Tours from "./ToursFunction";
import { useEffect } from "react";
import { fetchTours } from "../redux/tours/tours-async-actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function ContainerFunctionReduxToolkit() {
  const { isError, loading, tours } = useAppSelector((state) => state.tours);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

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
}
