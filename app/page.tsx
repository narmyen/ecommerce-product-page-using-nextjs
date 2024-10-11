import Image from "next/image";
import Nav from "./components/Nav";
import ShowDetail from "./components/ShowDetail";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <div className="grow flex items-center justify-center w-full">
        <ShowDetail />
      </div>
    </div>
  );
}
