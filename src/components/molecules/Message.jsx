import { PiUserCircleThin } from "react-icons/Pi";
import SocialTag from "../atoms/SocialTag";
import CategoryTag from "../atoms/CategoryTag";
import Sentiment from "../atoms/Sentiment";

const Message = ({ data }) => {
  const { message, replied_to, user_name, platform, sentiment } = data;
  return (
    <div
      className={`p-6 rounded-lg border border-gray-200 ${
        replied_to && "border-green-600"
      } mb-2 last:mb-0`}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <PiUserCircleThin size={32} />
          <span className="mr-2 text-base font-bold text-gray-600">{user_name}</span>
        </div>
        <SocialTag platform={platform} />
      </div>
      <div className="flex items-end justify-between mt-4 gap-3">
        <div className="left-6 text-sm mt-2">{message}</div>
        <div className="flex items-end flex-wrap justify-end lg:min-w-[180px]">
          <Sentiment sentiment={sentiment} />
          <CategoryTag />
        </div>
      </div>
    </div>
  );
};

export default Message;
