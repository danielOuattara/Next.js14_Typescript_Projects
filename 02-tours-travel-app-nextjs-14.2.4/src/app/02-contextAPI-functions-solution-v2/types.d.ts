interface ITour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: number;
}

interface IFetchToursState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  tours: ITour[] | [];
}

interface ITourContext {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  tours: ITour[];
  removeTourItem: (id: string) => void;
  fetchTours: () => Promise<void | undefined>;
}

interface ITourContextState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  tours: ITour[];
}

interface ITourContextProviderProps {
  children: React.ReactNode;
}

interface ISingleTourPropsContext {
  tour: ITour;
}
