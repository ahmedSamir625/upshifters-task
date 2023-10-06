import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import SearchIcon from "../atoms/SearchIcon";

const SearchBox = ({
  selectedOption,
  onSearchBoxClicked,
  onSearchMenuClicked,
  showSearchOptionsMenu,
  inputRef,
  isSearcResultsMenuOpen,
  showSearchResultMenu,
}) => {
  return (
    <div
      className="border border-gray-300 rounded-lg p-1 flex items-center md:w-2/3 hover:cursor-pointer"
      onClick={(e) => onSearchBoxClicked(e)}
    >
      <div
        className="flex items-center rounded-lg hover:bg-gray-100 select-none"
        onClick={(e) => onSearchMenuClicked(e)}
      >
        {showSearchOptionsMenu ? (
          <BsChevronDown className="mr-4" />
        ) : (
          <BsChevronUp className="mr-4" />
        )}
        <span className="mx-2 text-base leading-8 font-bold">{selectedOption.name}</span>
      </div>
      <input
        type="text"
        className="flex-grow focus:outline-none h-10 pr-2"
        placeholder="صباح الخير"
        ref={inputRef}
      />
      <SearchIcon
        isSearcResultsMenuOpen={isSearcResultsMenuOpen}
        showSearchResultMenu={showSearchResultMenu}
      />
    </div>
  );
};

export default SearchBox;
