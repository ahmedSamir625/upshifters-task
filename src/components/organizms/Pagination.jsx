import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  setInitialMessages,
  setNumberOfPages,
} from "../../redux/reducers/messagesSlice";
import { getData } from "../../utils/fakeAPI";
import { MESSAGES_PER_PAGE } from "../../constants";
import LoadingOverlay from "../atoms/LoadingOverlay";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = useSelector((state) => state.data.numberOfPages);
  const pages = [];
  const dispatch = useDispatch();

  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  const { data, isLoading, error, isError } = useQuery(["messages", currentPage], () =>
    getData(currentPage, MESSAGES_PER_PAGE)
  );

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(setInitialMessages(data.messages));
      dispatch(setNumberOfPages(data.pages));
    }
  }, [data, dispatch]);

  const handlePrevClicked = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextClicked = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePageBtnClicked = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center flex-col">
      <div className="my-5 mx-auto flex gap-2 items-center">
        <button
          className={`px-3 py-2 border border-gray-200 rounded-lg w-20 ${
            currentPage === 1 && "opacity-50"
          }`}
          onClick={handlePrevClicked}
          disabled={currentPage === 1}
        >
          السابق
        </button>
        <div className="flex flex-wrap gap-2">
          {pages.map((page) => (
            <button
              key={page}
              className={`px-3 py-2 rounded-full w-10 h-10`}
              style={
                currentPage === page
                  ? { backgroundColor: "#e9eAeB" }
                  : { backgroundColor: "transparent" }
              }
              onClick={() => handlePageBtnClicked(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          className={`px-3 py-2 border border-gray-200 rounded-lg w-20 ${
            currentPage === numberOfPages && "opacity-50"
          }`}
          onClick={handleNextClicked}
          disabled={currentPage === numberOfPages}
        >
          التالى
        </button>
      </div>
      {isLoading && <LoadingOverlay />}
    </div>
  );
};

export default Pagination;
