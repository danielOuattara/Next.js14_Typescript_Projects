"use client";

import { useState } from "react";
import JobAccessButtonFunction from "./JobAccessButtonFunction";
import JobDetailsFunction from "./JobDetailsFunction";

export default function JobPage({ jobs }: { jobs: JobType[] }) {
  "use client";
  const [jobToShow, setJobToShow] = useState<JobType>(jobs[0]);

  return (
    <div>
      <section className="section">
        <div className="title">
          <h2>experiences</h2>
          <div className="underline"></div>
        </div>

        <div className="jobs-center">
          <JobAccessButtonFunction
            jobs={jobs}
            setJobToShow={setJobToShow}
            jobToShowId={jobToShow.id}
          />
          <JobDetailsFunction job={jobToShow} />
        </div>
      </section>
    </div>
  );
}
