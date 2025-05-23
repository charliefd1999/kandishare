import Header from "./components/Header";
import ShareHistoryItem from "./components/ShareHistoryItem";
import BraceletPage from "./j/[braceletId]/page";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="mt-32">
        {/* <ShareHistoryItem key={123} nickname="charlie" comment="hi!! I got this bracelet at beyond wonderland. good vibes" timestamp={"timestamp"}/> */}
      </div>
    </div>
  );
}
