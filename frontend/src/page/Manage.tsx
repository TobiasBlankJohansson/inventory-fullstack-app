import { Navbar } from "@/components/navbar/Navbar";
import { Tabel } from "@/components/tabel/Tabel";

export function Manage() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar currentPage={1} currentPageName="Manage"></Navbar>
      <ol className="flex h-8 gap-2 m-2 mb-0 overflow-scroll">
        <li className="px-2 btn min-h-full h-full">+</li>
        <li className="px-2 btn min-h-full h-full">Verksdag</li>
        <li className="px-2 btn min-h-full h-full">Verksdag</li>
        <li className="px-2 btn min-h-full h-full">Verksdag</li>
        <li className="px-2 btn min-h-full h-full">Verksdag</li>
      </ol>
    </div>
  );
}
