type JobType = {
  id: string;
  order: string;
  title: string;
  dates: string;
  duties: string[];
  company: string;
};

type PropsJobAccessButton = {
  jobs: JobType[];
  setJobToShow: Dispatch<SetStateAction<JobType>>;
  jobToShowId: string;
};

// type FetchJobsStateType = {
//   jobs: JobType[];
//   isLoading: boolean;
//   error: string;
//   jobIndex: number;
// };
