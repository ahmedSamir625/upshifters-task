import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import SearchIcon from "../atoms/SearchIcon";
import { useQuery } from "react-query";
import { debounce } from "lodash";
import { useState, useEffect } from "react";
import { searchMessages } from "../../utils/fakeAPI";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchResultMessages,
  setSearchResultsLoading,
} from "../../redux/reducers/messagesSlice";

import {
  incrementSearchBoxClicks,
  setSearchOptionsOpen,
  setSearchResultsOpen,
} from "../../redux/reducers/searchSlice";

const SearchBox = ({ inputRef }) => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const debouncedSearch = debounce(setSearchText, 500);

  const searchOptionsMenuOpen = useSelector((state) => state.search.searchOptionsOpen);
  const searchResultsMenuOpen = useSelector((state) => state.search.searchResultsOpen);
  const selectedOption = useSelector((state) => state.search.selectedOption);
  const searchBoxClicks = useSelector((state) => state.search.searchBoxClicks);

  const { data, isLoading, isError, isSuccess } = useQuery(
    ["messages", "search", searchText],
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

  const handleSearchBoxClicked = (e) => {
    if (searchBoxClicks === 0 && !searchOptionsMenuOpen) {
      dispatch(setSearchOptionsOpen(true));
    } else if (searchBoxClicks === 0 && searchOptionsMenuOpen) {
      dispatch(setSearchOptionsOpen(false));

      dispatch(setSearchResultsOpen(true));
    } else {
      dispatch(setSearchOptionsOpen(false));

      dispatch(setSearchResultsOpen(true));
    }
    dispatch(incrementSearchBoxClicks());
  };

  const handleSearchOptionsMenuClick = (e) => {
    e.stopPropagation();
    dispatch(setSearchResultsOpen(false));
    dispatch(setSearchOptionsOpen(!searchOptionsMenuOpen));
  };

  return (
    <div
      className="border border-gray-300 rounded-lg p-1 flex items-center md:w-2/3 hover:cursor-pointer"
      onClick={(e) => handleSearchBoxClicked(e)}
    >
      <div
        className="flex items-center rounded-lg hover:bg-gray-100 select-none"
        onClick={(e) => handleSearchOptionsMenuClick(e)}
      >
        {searchOptionsMenuOpen ? (
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
      <SearchIcon />
    </div>
  );
};

export default SearchBox;
