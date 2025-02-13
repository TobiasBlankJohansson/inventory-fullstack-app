import { getItems } from "@/api/InventoryApiService";
import { Navbar } from "@/components/navbar/Navbar";
import { item, Tabel } from "@/components/tabel/Tabel";
import { useEffect, useState } from "react";

export function Manage() {  
  const [items, setItems] = useState<item[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getItems();
      setItems(data);
    };
    fetchData();
  }, []);
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
