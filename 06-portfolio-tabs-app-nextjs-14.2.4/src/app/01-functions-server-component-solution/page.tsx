import JobPage from "./components/JobPage";
import fetchAllJobs from "./library/fetchAllJobs";

export default async function PageFunctionSolution() {
  const jobs = await fetchAllJobs();
  return <JobPage jobs={jobs} />;
}
