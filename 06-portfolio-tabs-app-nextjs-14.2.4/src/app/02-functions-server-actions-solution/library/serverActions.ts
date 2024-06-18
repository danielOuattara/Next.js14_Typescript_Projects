"use server";

import fetchAllJobs from "./fetchAllJobs";

export async function getJobs(): Promise<JobType[]> {
  return await fetchAllJobs();
}
