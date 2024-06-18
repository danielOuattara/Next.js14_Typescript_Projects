const url = "https://www.course-api.com/react-tabs-project";

export default async function fetchAllJobs(): Promise<JobType[]> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  const allJobs: JobType[] = await res.json();

  return allJobs;
}
