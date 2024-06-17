interface ITour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: number;
}

interface ITourContext {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  tours: ITour[];
  removeTourItem: (id: string) => void;
  fetchTours: () => Promise<void | undefined>;
}

interface ITourContextProviderProps {
  children: React.ReactNode;
}

interface ISingleTourPropsContext {
  tour: ITour;
}
