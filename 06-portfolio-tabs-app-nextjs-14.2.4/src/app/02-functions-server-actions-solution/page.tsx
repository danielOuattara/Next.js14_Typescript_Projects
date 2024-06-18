import { getJobs } from "./library/serverActions";
import JobPage from "./components/JobPage";

export default async function PageFunctionSolution() {
  const jobs = await getJobs();
  return <JobPage jobs={jobs} />;
}
