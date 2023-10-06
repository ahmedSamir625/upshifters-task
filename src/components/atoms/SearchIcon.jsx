import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const SearchIcon = ({ isSearcResultsMenuOpen, showSearchResultMenu }) => {
  return (
    <div className="mr-2 bg-[#EFF8FF] rounded-lg">
      {isSearcResultsMenuOpen ? (
        <div
          className="h-full w-ful"
          onClick={(e) => {
            e.stopPropagation();
            showSearchResultMenu(false);
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
