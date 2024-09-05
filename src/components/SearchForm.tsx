import { useSearchTextContext } from "../contexts/SearchTextContextProvider";

// type SearchFormProps = {
//   searchText: string;
//   setSearchText: (searchText: string) => void;
// };

export default function SearchForm() {
  const { searchText, handleChangeSearchText } = useSearchTextContext();
  // const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newText = e.target.value;
  //   setSearchText(newText);
  // };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      action="#"
      className="search"
    >
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        value={searchText}
        onChange={(e) => {
          handleChangeSearchText(e.target.value);
        }}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
