export type JobItem = {
  id: number;
  relevanceScore: number;
  daysAgo: number;
  title: string;
  company: string;
  badgeLetters: string;
  date: string;
};

export type JobItemExpanded = JobItem & {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  salary: string;
  location: string;
  coverImgURL: string;
  companyURL: string;
};

export type SortBy = "relevant" | "recent";
