import { useQuery, QueryErrorResetBoundary } from "react-query";
import fakeAPI from "../../utils/fakeAPI";
import Loading from "../atoms/Loading";
import Error from "../atoms/Error";
import FiltersSection from "../layouts/FiltersSection";
import AllMessagesSection from "../layouts/AllMessagesSection";
import { useDispatch } from "react-redux";
import { setInitialMessages } from "../../redux/reducers/messagesSlice";

const MessagesListApp = () => {
  const { data, isLoading, error, isError, refetch } = useQuery("posts", fakeAPI);
  const dispatch = useDispatch();

  if (data?.messages) {
    dispatch(setInitialMessages(data.messages));
  }

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <div className="p-6 flex w-full flex-col">
          <div>
            <h1 className="text-xl leading-7 font-semibold">الرسائل</h1>
            <h2 className="text-sm leading-8 ">يمكنك إدارة العملاء المحتملين بكل سهولة من هنا</h2>
          </div>
          {isLoading ? (
            <Loading />
          ) : isError ? (
            <Error
              msg={error.message}
              onRefreshClick={() => {
                reset();
                refetch();
              }}
            />
          ) : (
            data && (
              <>
                <FiltersSection />
                <AllMessagesSection />
              </>
            )
          )}
        </div>
      )}
    </QueryErrorResetBoundary>
  );
};

export default MessagesListApp;
