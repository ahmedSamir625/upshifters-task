import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setSearchResultsOpen } from "../../redux/reducers/searchSlice";

const SearchIcon = () => {
  const dispatch = useDispatch();
  const searchResultsMenuOpen = useSelector((state) => state.search.searchResultsOpen);

  const handleSearchIconClick = (e) => {
    e.stopPropagation();
    dispatch(setSearchResultsOpen(false));
  };

  return (
    <div className="mr-2 bg-[#EFF8FF] rounded-lg">
      {searchResultsMenuOpen ? (
        <div
          className="h-full w-ful"
          onClick={(e) => {
            handleSearchIconClick(e);
          }}
        >
          <AiOutlineClose color="#1849A9" className="p-3 box-content" />
        </div>
      ) : (
        <FiSearch color="#1849A9" className="p-3 box-content" />
      )}
    </div>
  );
};

export default SearchIcon;
