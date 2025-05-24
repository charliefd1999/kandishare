"use client";

import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

interface ShareModalProps {
  braceletId: string;
  isOpen: boolean;
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({
  braceletId,
  isOpen,
  onClose,
}) => {
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!message.trim()) return;

    await addDoc(collection(db, "shares"), {
      braceletId: braceletId,
      message: message,
      nickname: nickname,
      timestamp: Timestamp.now(),
    });

    setNickname("");
    setMessage("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md text-black mx-6">
        <h2 className="text-xl font-semibold mb-4">leave a message</h2>

        <input
          type="text"
          placeholder="nickname"
          className="w-full p-2 border border-black rounded mb-3 focus:border-pink-500 focus:outline-none"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <textarea
          rows={4}
          placeholder="your message"
          className="w-full p-2 border border-black rounded mb-4 focus:border-pink-500 focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="flex justify-between">
          <button onClick={onClose} className="text-gray-600 hover:underline">
            cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={!message.trim()}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            share
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
