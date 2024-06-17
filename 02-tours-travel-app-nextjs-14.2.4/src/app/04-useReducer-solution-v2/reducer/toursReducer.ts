export const RESET_ALL_TOURS = "RESET_ALL_TOURS";
export const REMOVE_ONE_TOUR = "REMOVE_ONE_TOUR";
export const START_FETCH_TOURS = "START_FETCH_TOURS";
export const HANDLE_FETCH_ERROR = "HANDLE_FETCH_ERROR";
export const HANDLE_FETCH_SUCCESS = "HANDLE_FETCH_SUCCESS";
export const HANDLE_ERROR = "HANDLE_ERROR";

export const toursReducer = (
  state: IFetchToursState,
  action: TypeToursAction,
) => {
  switch (action.type) {
    case REMOVE_ONE_TOUR:
      return {
        ...state,
        tours: state.tours.filter((tour) => tour.id !== action.payload),
      };

    case START_FETCH_TOURS:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: "",
      };

    case HANDLE_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: "",
        tours: action.payload,
      };

    case HANDLE_FETCH_ERROR:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: action.payload,
      };

    case HANDLE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};
