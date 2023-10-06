import { useState } from "react";
import { useRef } from "react";
import _ from "lodash";
import SearchBox from "../organizms/SearchBox";
import SearchOptionsMenu from "../organizms/SearchOptionsMenu";
import SearchResultsMenu from "../organizms/SearchResultsMenu";

const FiltersSection = () => {
  const [selectedOption, setSelectedOption] = useState({ type: "all", name: "الكل" });
  const [showSearchOptionsMenu, setShowSearchOptionsMenu] = useState(false);
  const [showSearchResultMenu, setShowSearchResultMenu] = useState(false);
  const [searchBoxClickCounter, setsSearchBoxClickCounter] = useState(0);

  const inputRef = useRef(null);

  const options = [
    {
      type: "all",
      name: "الكل",
      placeholder: "اعثر علي المستخدمين والرسائل التي تحتوي علي “صباح الخير”",
    },
    {
      type: "users",
      name: "المستخدمين",
      placeholder: "اعثر علي المستخدمين الذي تحتوي اسمائهم علي “صباح الخير”",
    },
    {
      type: "messages",
      name: "الرسائل",
      placeholder: "اعثر علي الرسائل التي تحتوي علي “صباح الخير”",
    },
  ];

  const handleSearchBoxClicked = (e) => {
    if (searchBoxClickCounter === 0 && !showSearchOptionsMenu) {
      setShowSearchOptionsMenu(true);
    } else if (searchBoxClickCounter === 0 && showSearchOptionsMenu) {
      setShowSearchOptionsMenu(false);
      setShowSearchResultMenu(true);
    } else {
      setShowSearchOptionsMenu(false);
      setShowSearchResultMenu(true);
    }
    setsSearchBoxClickCounter((prev) => prev + 1);
  };

  const handleSearchOptionClick = (e) => {
    e.stopPropagation();
    const type = e.currentTarget.getAttribute("data-type");
    if (type) {
      const option = _.find(options, function (o) {
        return o.type == type;
      });
      setSelectedOption(option);
      setShowSearchOptionsMenu(false);
      setShowSearchResultMenu(true);
      inputRef.current.focus();
    }
  };

  const handleSearchOptionsMenuClick = (e) => {
    e.stopPropagation();

    setShowSearchResultMenu(false);
    setShowSearchOptionsMenu((prev) => !prev);
  };

  return (
    <div className="relative border-y border-y-gray-200  mt-8 -mx-6 px-6 py-3 ">
      <SearchBox
        onSearchBoxClicked={handleSearchBoxClicked}
        onSearchMenuClicked={handleSearchOptionsMenuClick}
        showSearchOptionsMenu={showSearchOptionsMenu}
        selectedOption={selectedOption}
        inputRef={inputRef}
        isSearcResultsMenuOpen={showSearchResultMenu}
        showSearchResultMenu={setShowSearchResultMenu}
      />
      {showSearchOptionsMenu && (
        <SearchOptionsMenu options={options} onSearchOptionClick={handleSearchOptionClick} />
      )}
      {showSearchResultMenu && <SearchResultsMenu />}
    </div>
  );
};

export default FiltersSection;
