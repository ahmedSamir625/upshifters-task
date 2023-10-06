import { useSelector } from "react-redux";
import Message from "../molecules/Message";

const SearchResultsMenu = () => {
  const messages = useSelector((state) => state.data.messages);

  return (
    <div className="absolute left-6 right-6 bg-white p-10 mt-3 rounded-lg shadow-2xl shadow-gray-500  max-h-[70svh] overflow-y-scroll z-50">
      {messages.map((msg) => (
        <Message data={msg} key={msg.id} />
      ))}
    </div>
  );
};

export default SearchResultsMenu;
