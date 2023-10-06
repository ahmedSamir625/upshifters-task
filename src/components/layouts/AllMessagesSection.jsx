import React from "react";
import { useSelector } from "react-redux";
import Message from "../molecules/Message";
import SortMenu from "../organizms/SortMenu";

const AllMessagesSection = () => {
  const messages = useSelector((state) => state.data.displayedMessages);

  return (
    <section className="mt-5">
      <div className="flex justify-between">
        <div>
          <span className="text-xl leading-8 ml-2">كل الرسائل</span>
          <span className="rounded-full border border-gray-500 px-[6px] py-[2px]">
            {messages?.length}
          </span>
        </div>

        <SortMenu />
      </div>

      <div className="mt-3">
        {messages && messages.map((msg) => <Message data={msg} key={msg.id} />)}
      </div>
    </section>
  );
};

export default AllMessagesSection;
