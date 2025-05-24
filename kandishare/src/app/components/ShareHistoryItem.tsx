import { Timestamp } from "firebase/firestore";

interface ShareHistoryItemProps {
  nickname: string;
  message: string;
  timestamp: string;
}

const ShareHistoryItem: React.FC<ShareHistoryItemProps> = ({
  nickname,
  message,
  timestamp,
}) => {
  return (
    <div className="bg-white border rounded-lg shadow h-40 flex flex-col justify-between p-4 m-2">
      <div>
        <div id="nicknameBox" className="font-semibold text-gray-700 mb-1">
          {nickname}
        </div>
        <div
          id="commentBox"
          className="text-base text-gray-800 overflow-auto max-h-[64px]"
        >
          {message}
        </div>
      </div>
      <div className="flex justify-end items-end text-gray-800">
        {timestamp}
      </div>
    </div>
  );
};

export default ShareHistoryItem;
