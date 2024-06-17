import Tours from "./components/Tours";
import fetchTours from "./libs/fetchTours";

export default async function AppFunction() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const toursFetched = await fetchTours();

  return <Tours toursProps={toursFetched} />;
}
