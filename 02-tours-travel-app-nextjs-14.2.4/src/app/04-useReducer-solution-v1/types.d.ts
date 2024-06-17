interface ITour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}

interface IFetchToursState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  tours: ITour[] | [];
}

type RESET_ALL_TOURS = "RESET_ALL_TOURS";
type REMOVE_ONE_TOUR = "REMOVE_ONE_TOUR";
type START_FETCH_TOURS = "START_FETCH_TOURS";
type HANDLE_FETCH_ERROR = "HANDLE_FETCH_ERROR";
type HANDLE_FETCH_SUCCESS = "HANDLE_FETCH_SUCCESS";
type HANDLE_ERROR = "HANDLE_ERROR";

type TypeToursAction =
  | { type: REMOVE_ONE_TOUR; payload: string }
  | { type: RESET_ALL_TOURS }
  | { type: START_FETCH_TOURS }
  | { type: HANDLE_FETCH_ERROR; payload: string }
  | { type: HANDLE_FETCH_SUCCESS; payload: ITour[] }
  | { type: HANDLE_ERROR };

type TypeErrorMessage = {
  code: number;
  message: string;
};

type TypeFetchError = {
  message: string;
  code?: string;
};

type TypeFetchTours = {
  fetchTours: () => Promise<void | undefined>;
};

type TypeToursProps = {
  tours: ITour[];
  removeTourItem: (id: string) => void;
};

type TypeSingleTourProps = {
  tour: ITour;
  removeTourItem: (id: string) => void;
};
