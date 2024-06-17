interface ITour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: number;
}

interface IFetchState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  tours: ITour[] | [];
}

interface IToursProps {
  tours: ITour[];
  removeTourItem: (id: string) => void;
}

interface ISingleTourProps {
  tour: ITour;
  removeTourItem: (id: string) => void;
}

interface IErrorMessageProps {
  errorMessage: string;
}

interface IRestTours {
  fetchTours: () => Promise<void | undefined>;
}
