import { createAsyncThunk } from "@reduxjs/toolkit";
import { toursActions } from "./tours-slice";

const url = "https://www.course-api.com/react-tours-project";

export const fetchTours = createAsyncThunk<ITour[], void>(
  "tours/fetchAll",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(toursActions.startFetchTours());
      const res = await fetch(url);
      if (!res.ok) {
        const errorMessage = `${res.status} ${res.statusText}`;
        dispatch(toursActions.handleFetchError(errorMessage));
        return rejectWithValue(errorMessage);
      }
      const toursData: ITour[] = await res.json();
      return toursData;
    } catch (err: any) {
      dispatch(toursActions.handleError());
      return rejectWithValue(err.message);
    }
  },
);
