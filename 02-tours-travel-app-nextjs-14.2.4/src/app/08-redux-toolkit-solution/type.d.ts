interface ITour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}

interface IToursState {
  loading: boolean;
  isError: boolean;
  errorMessage: string;
  tours: ITour[];
}

interface IFetchToursState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  tours: ITour[] | [];
}

type TypeToursAction =
  | { type: "REMOVE_ONE_TOUR"; payload: string }
  | { type: "RESET_ALL_TOURS" }
  | { type: "START_FETCH_TOURS" }
  | { type: "HANDLE_FETCH_ERROR"; payload: string }
  | { type: "HANDLE_FETCH_SUCCESS"; payload: ITour[] }
  | { type: "HANDLE_ERROR" };

type TypeErrorMessage = {
  code: number;
  message: string;
};
