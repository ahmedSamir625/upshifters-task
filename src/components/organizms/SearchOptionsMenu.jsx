import { LiaArrowLeftSolid } from "react-icons/lia";

const SearchOptionsMenu = ({ options, onSearchOptionClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mt-4">
      <span className="text-xs">بحث فى</span>
      {options.map(({ name, type, placeholder }) => (
        <div
          key={type}
          className="px-4 py-3 rounded-lg flex items-center mb-2 last:mb-0 justify-between hover:cursor-pointer hover:bg-slate-100"
          id={type}
          data-type={type}
          onClick={(e) => onSearchOptionClick(e)}
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
