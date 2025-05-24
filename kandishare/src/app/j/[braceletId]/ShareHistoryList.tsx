"use client";

import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../firebaseConfig";
import ShareHistoryItem from "@/app/components/ShareHistoryItem";
import { unsubscribe } from "diagnostics_channel";

interface ShareItem {
  id: string;
  braceletId: string;
  message: string;
  nickname: string;
  timestamp: Timestamp;
}

const ShareHistoryList: React.FC<{ braceletId: string }> = ({ braceletId }) => {
  const [shares, setShares] = useState<ShareItem[]>([]);

  useEffect(() => {
    if (!braceletId) return;
    const q = query(
      collection(db, "shares"),
      where("braceletId", "==", braceletId),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ShareItem[];
      setShares(results);
    });

    return () => unsubscribe();
  }, [braceletId]);

  return (
    <>
      <div>
        {shares.length > 0 ? (
          <div className="space-y-4 flex flex-col">
            {shares.map((share) => (
              <ShareHistoryItem
                key={share.id}
                nickname={share.nickname}
                message={share.message}
                timestamp={share.timestamp.toDate().toLocaleString()}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No messages yet. Be the first to share.
          </p>
        )}
      </div>
    </>
  );
};

export default ShareHistoryList;
