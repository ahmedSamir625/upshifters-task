import { useState } from "react";
import { CgSortAz } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { sortMessages } from "../../redux/reducers/messagesSlice";

const SortMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("all");
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const sortList = [
    { type: "all", name: "الكل" },
    { type: "sentiment", name: "الحالة" },
    { type: "replied_to", name: "ردا على" },
    { type: "priority", name: "الاهمية" },
    { type: "platform", name: "المنصة" },
  ];

  const handleItemClick = (event, type) => {
    setSelectedItem(type);
    toggleMenu();
    dispatch(sortMessages(type));
  };

  return (
    <div className="flex items-end flex-col relative">
      <div
        className="bg-[#EAECF0] rounded-full py-[8px] px-[14px] flex items-center hover:cursor-pointer select-none"
        onClick={toggleMenu}
      >
        <span className="hidden md:block"> ترتيب حسب</span>
        <CgSortAz size={28} />
      </div>

      {menuOpen && (
        <div
          id="test"
          className="bg-white absolute top-12 shadow-2xl shadow-slate-400 w-[190px] p-5 rounded-md"
        >
          {sortList.map(({ name, type }, index) => (
            <div
              key={index}
              className="text-base h-9 hover:bg-[#EFF8FF] hover:cursor-pointer pr-3 "
              style={{ backgroundColor: `${selectedItem === type ? "#EFF8FF" : "white"} ` }}
              onClick={(e) => handleItemClick(e, type)}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortMenu;
