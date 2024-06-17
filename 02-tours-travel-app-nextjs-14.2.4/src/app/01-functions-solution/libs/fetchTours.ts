"use server";

const url = "https://www.course-api.com/react-tours-project";

export default async function fetchTours() {
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`${res.status} ${res.statusText}`);
  }
  const tours: ITour[] = await res.json();
  return tours;
}
