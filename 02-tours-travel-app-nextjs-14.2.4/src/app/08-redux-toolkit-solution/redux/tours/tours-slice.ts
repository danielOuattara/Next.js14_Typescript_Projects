import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTours } from "./tours-async-actions";

const initialState: IToursState = {
  loading: false,
  isError: false,
  errorMessage: "",
  tours: [],
};

const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    startFetchTours(state) {
      return {
        ...state,
        loading: true,
        isError: false,
        errorMessage: "",
      };
    },
    removeOneTour(state, action: PayloadAction<string>) {
      return {
        ...state,
        tours: state.tours.filter((tour) => tour.id !== action.payload),
      };
    },

    handleFetchError(state, action: PayloadAction<string>) {
      return {
        ...state,
        loading: true,
        isError: false,
        errorMessage: action.payload,
      };
    },
    handleError(state) {
      return {
        ...state,
        loading: false,
        isError: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.loading = false;
        state.isError = false;
        state.tours = action.payload;
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.errorMessage =
          (action.payload as string) || "Something went wrong";
      });
  },
});

export const toursActions = toursSlice.actions;

export default toursSlice.reducer;
