"use client";

/* n°1 : null initial context 
--------------------------------*/

import {
  useState,
  useEffect,
  createContext,
  useCallback,
  useContext,
} from "react";

export const ToursContext = createContext<ITourContext | null>(null);

const url = "https://www.course-api.com/react-tours-project";

export default function ToursContextProvider({
  children,
}: ITourContextProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [tours, setTours] = useState<ITour[]>([]);

  const fetchTours = useCallback(async (): Promise<void | undefined> => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        setIsError(true);
        setIsLoading(false);
        setErrorMessage(`${res.status} ${res.statusText}`);
        throw Error(`${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setTours(data);
      setIsLoading(false);
      setErrorMessage("");
    } catch (err) {
      if (err instanceof Error) {
        setIsLoading(false);
        setIsError(true);
        return undefined;
      }
    }
  }, []);

  const removeTourItem = (id: string) =>
    setTours((tours) => tours.filter((item) => item.id !== id));

  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  return (
    <ToursContext.Provider
      value={{
        isLoading,
        isError,
        errorMessage,
        tours,
        removeTourItem,
        fetchTours,
      }}
    >
      {children}
    </ToursContext.Provider>
  );
}

export const useToursContext = () => useContext(ToursContext);

/* n°2 : NON null initial context : OK
---------------------------------------*/

// import { useState, useEffect, createContext, useCallback } from "react";

// export const ToursContext = createContext<ITourContext>({
//   isLoading: true,
//   isError: false,
//   errorMessage: "",
//   tours: [],
//   removeTourItem: () => {},
//   fetchTours: async () => {},
// });

// const url = "https://course-api.com/react-tours-project";

// export default function ToursContextProvider({
//   children,
// }: ITourContextProvider) {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [tours, setTours] = useState<ITour[]>([]);

//   const fetchTours = useCallback(async (): Promise<void | undefined> => {
//     try {
//       const res = await fetch(url);
//       if (!res.ok) {
//         setIsError(true);
//         setIsLoading(false);
//         setErrorMessage(`${res.status} ${res.statusText}`);
//         throw Error(`${res.status} ${res.statusText}`);
//       }
//       const data = await res.json();
//       setTours(data);
//       setIsLoading(false);
//       setErrorMessage("");
//     } catch (err) {
//       if (err instanceof Error) {
//         setIsLoading(false);
//         setIsError(true);
//         return undefined;
//       }
//     }
//   }, []);

//   const removeTourItem = (id: string) =>
//     setTours((tours) => tours.filter((item) => item.id !== id));

//   useEffect(() => {
//     fetchTours();
//   }, [fetchTours]);

//   return (
//     <ToursContext.Provider
//       value={{
//         isLoading,
//         isError,
//         errorMessage,
//         tours,
//         removeTourItem,
//         fetchTours,
//       }}
//     >
//       {children}
//     </ToursContext.Provider>
//   );
// }
