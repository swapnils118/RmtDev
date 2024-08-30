import { createContext, useContext } from "react";
import { useLocalStorage } from "../lib/hooks";

type BookmarksContext = {
  bookmarkedIds: number[];
  handleToggleBookmark: (id: number) => void;
};

const BookmarksContext = createContext<BookmarksContext | null>(null);

export default function BookmarksContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //   const bookmarkedIdsFromLocalStorage = JSON.parse(
  //     localStorage.getItem("bookmarkedIds") || "[]"
  //   );

  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<number[]>(
    "bookmarkedIds",
    []
  );
  //   console.log(bookmarkedIds);

  const handleToggleBookmark = (id: number) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds((prev) => prev.filter((item) => item !== id));
    } else {
      setBookmarkedIds((prev) => [...prev, id]);
    }
  };

  //   useEffect(() => {
  //     localStorage.setItem("bookmarkedIds", JSON.stringify(bookmarkedIds));
  //   }, [bookmarkedIds]);

  return (
    <BookmarksContext.Provider
      value={{
        bookmarkedIds,
        handleToggleBookmark,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}

export function useBookmarksContext() {
  const context = useContext(BookmarksContext);
  if (!context) {
    throw new Error("Isn't used within context range");
  }
  return context;
}
