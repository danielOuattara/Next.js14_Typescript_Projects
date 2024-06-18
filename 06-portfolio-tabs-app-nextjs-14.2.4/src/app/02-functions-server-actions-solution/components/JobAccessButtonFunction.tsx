// "use client";

// import { useState } from "react";

export default function JobAccessButton({
  jobs,
  setJobToShow,
  jobToShowId,
}: PropsJobAccessButton) {
  // const [selectedJob, setSelectedJob] = useState(jobs[0]);
  return (
    <div className="btn-container">
      {jobs.map((job) => (
        <button
          className={`job-btn ${job.id === jobToShowId && "active-btn"}`}
          key={job.id}
          onClick={() => setJobToShow(() => job)}
        >
          {job.company}
        </button>
      ))}
    </div>
  );
}
