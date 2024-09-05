import { useJobItemsContext } from "../contexts/JobItemsContextProvider";
import JobList from "./JobList";

export default function JobListSearch() {
  const { jobItemsSortedAndSliced, isLoading } = useJobItemsContext();
  <JobList jobItems={jobItemsSortedAndSliced} isLoading={isLoading} />;
  return;
}
