import { useEffect, useState } from "react";

export function useJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchText) return;

    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
      );
      const data = await response.json();
      // console.log(data.jobItems);
      setIsLoading(false);
      setJobItems(data.jobItems);
    };

    fetchData();
  }, [searchText]);

  return {
    jobItems,
    isLoading,
  };
}
