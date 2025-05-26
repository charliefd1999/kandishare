"use client";

import { useParams } from "next/navigation";
import ShareHistoryList from "./ShareHistoryList";
import Header from "@/app/components/Header";
import { useRef, useState } from "react";
import ShareModal from "@/app/components/ShareModal";
import Footer from "@/app/components/Footer";

export default function BraceletPage() {
  const { braceletId } = useParams();
  const [modalOpen, setModalOpen] = useState(false);

  if (!braceletId || typeof braceletId !== "string") return null;

  return (
    <div className="bg-[#0A0A0A]">
      <Header />
      <div className="mt-[10vh] mb-4 text-center">
        <p className="text-white text-center px-6 py-4 text-lg">
          This bracelet is part of a project called kandishare. Every time
          someone trades it, they can scan the code and leave a short message.
          <br />
          <br />
          You can scroll down to read what others have written. If you want, you
          can add your own message too—then pass the bracelet on.
        </p>
      </div>
      <div>
        <button
          onClick={() => setModalOpen(true)}
          className="fixed bottom-6 right-6 w-12 h-12 bg-white border-[2px] border-pink-400 text-pink-400 text-black text-2xl rounded-xl shadow-md flex items-center justify-center hover:scale-105 transition"
        >
          +
        </button>
      </div>
      <div className="my-4">
        <ShareHistoryList braceletId={braceletId} />
      </div>
      <Footer />

      <ShareModal
        braceletId={braceletId}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
