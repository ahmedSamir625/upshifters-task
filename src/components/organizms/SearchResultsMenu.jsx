import { useSelector } from "react-redux";
import Message from "../molecules/Message";
import Loading from "../atoms/Loading";

const SearchResultsMenu = () => {
  const messages = useSelector((state) => state.search.searchResultMessages);
  const searchResultsLoading = useSelector((state) => state.search.searchResultLoading);

  return (
    <div className="absolute left-6 right-6 bg-white p-10 mt-3 rounded-lg shadow-2xl shadow-gray-500  max-h-[70svh] overflow-y-scroll z-50">
      {searchResultsLoading ? (
        <Loading />
      ) : (
        <>
          {messages?.map((msg) => (
            <Message data={msg} key={msg.id} />
          ))}

          {messages?.length === 0 && <div>لا يوجد نتائج</div>}
        </>
      )}
    </div>
  );
};

export default SearchResultsMenu;
