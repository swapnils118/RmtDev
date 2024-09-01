import { forwardRef } from "react";
import { useBookmarksContext } from "../contexts/BookmarksContextProvider";
import JobList from "./JobList";

const BookmarksPopover = forwardRef(function (props, ref) {
  const { bookmarkedJobItems, isLoading } = useBookmarksContext();
  return (
    <div ref={popoverRef} className="bookmarks-popover">
      <JobList jobItems={bookmarkedJobItems} isLoading={isLoading} />
    </div>
  );
});

export default BookmarksPopover;
