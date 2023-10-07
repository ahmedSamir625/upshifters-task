import { LiaArrowLeftSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import {
  setSearchOptionsOpen,
  setSearchResultsOpen,
  setSelectedOption,
} from "../../redux/reducers/searchSlice";
import _ from "lodash";

const SearchOptionsMenu = ({ focusInput }) => {
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

  const dispatch = useDispatch();

  const handleSearchOptionClick = (e) => {
    e.stopPropagation();
    const type = e.currentTarget.getAttribute("data-type");
    if (type) {
      const option = _.find(options, function (o) {
        return o.type == type;
      });
      dispatch(setSelectedOption(option));
      dispatch(setSearchOptionsOpen(false));
      dispatch(setSearchResultsOpen(true));
      focusInput();
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 mt-4">
      <span className="text-xs">بحث فى</span>
      {options.map(({ name, type, placeholder }) => (
        <div
          key={type}
          className="px-4 py-3 rounded-lg flex items-center mb-2 last:mb-0 justify-between hover:cursor-pointer hover:bg-slate-100"
          id={type}
          data-type={type}
          onClick={(e) => handleSearchOptionClick(e)}
        >
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">{name}</span>
            <span className="text-xs">{placeholder}</span>
          </div>

          <LiaArrowLeftSolid />
        </div>
      ))}
    </div>
  );
};

export default SearchOptionsMenu;
