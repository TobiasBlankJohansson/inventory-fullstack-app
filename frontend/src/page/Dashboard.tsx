import { Navbar } from "@/components/navbar/Navbar";
import { Print } from "@/components/print/Print";
import { Search } from "@/components/search/Search";
import { Select } from "@/components/select/Select";
import { item, Tabel } from "@/components/tabel/Tabel";

const mockData: item[] = [
      { id: "1", name: "Screwdriver", quantity: "3", storageArea: "A1" },
      { id: "2", name: "Hammer", quantity: "2", storageArea: "B3" },
      { id: "3", name: "Wrench", quantity: "5", storageArea: "C2" },
      { id: "4", name: "Drill", quantity: "1", storageArea: "D4" },
    ];
  

export function Dashboard() {

  return (
    <div className="h-screen flex flex-col">
      <Navbar></Navbar>
      <section className="h-10 grid grid-flow-col grid-cols-3 gap-2 m-2 mb-0">
        <Search></Search>
        <Select></Select>
        <Print></Print>
      </section>
      <Tabel items={mockData}></Tabel>
    </div>
  );
}
