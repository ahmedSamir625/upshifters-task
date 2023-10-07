import _ from "lodash";
import SearchBox from "../organizms/SearchBox";
import SearchOptionsMenu from "../organizms/SearchOptionsMenu";
import SearchResultsMenu from "../organizms/SearchResultsMenu";
import { useSelector } from "react-redux";
import { useRef } from "react";

const FiltersSection = () => {
  const searchOptionsMenuOpen = useSelector((state) => state.search.searchOptionsOpen);
  const searchResultsMenuOpen = useSelector((state) => state.search.searchResultsOpen);
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="relative border-y border-y-gray-200  mt-8 -mx-6 px-6 py-3 ">
      <SearchBox inputRef={inputRef} />
      {searchOptionsMenuOpen && <SearchOptionsMenu focusInput={focusInput} />}
      {searchResultsMenuOpen && <SearchResultsMenu />}
    </div>
  );
};

export default FiltersSection;
