import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="h-[20vh] my-[10vh] text-center">
        <div className="mt-12">
          <p className="text-white text-center text-lg">
            This bracelet is part of a project called kandishare. Every time
            someone trades it, they can scan the code and leave a short message.
          </p>
        </div>
      </div>
    </div>
  );
}
