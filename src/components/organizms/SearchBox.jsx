import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import SearchIcon from "../atoms/SearchIcon";
import { useQuery } from "react-query";
import { debounce } from "lodash";
import { useState, useEffect } from "react";
import { searchMessages } from "../../utils/fakeAPI";
import { useDispatch } from "react-redux";
import {
  setSearchResultMessages,
  setSearchResultsLoading,
} from "../../redux/reducers/messagesSlice";

const SearchBox = ({
  selectedOption,
  onSearchBoxClicked,
  onSearchMenuClicked,
  showSearchOptionsMenu,
  inputRef,
  isSearcResultsMenuOpen,
  showSearchResultMenu,
}) => {
  const [searchText, setSearchText] = useState("");
  const debouncedSearch = debounce(setSearchText, 500);
  const dispatch = useDispatch();

  const { data, isLoading, isError, isSuccess } = useQuery(
    ["products", searchText],
    () => searchMessages(searchText, selectedOption.type),
    {
      enabled: !!searchText,
    }
  );

  useEffect(() => debouncedSearch.cancel, [debouncedSearch]);

  const handleInputChange = (event) => {
    debouncedSearch(event.target.value);
  };

  useEffect(() => {
    if (isLoading) {
      dispatch(setSearchResultsLoading(true));
    } else if (isError) {
      dispatch(setSearchResultsLoading(false));
    } else if (isSuccess) {
      dispatch(setSearchResultsLoading(false));
      if (data?.messages) {
        dispatch(setSearchResultMessages(data.messages));
      }
    }
  }, [data, isLoading, isError, isSuccess, dispatch]);

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
        <span className="mx-2 text-base leading-8 font-bold">{selectedOption?.name}</span>
      </div>
      <input
        type="text"
        className="flex-grow focus:outline-none h-10 pr-2"
        placeholder="صباح الخير"
        ref={inputRef}
        onChange={handleInputChange}
      />
      <SearchIcon
        isSearcResultsMenuOpen={isSearcResultsMenuOpen}
        showSearchResultMenu={showSearchResultMenu}
      />
    </div>
  );
};

export default SearchBox;
