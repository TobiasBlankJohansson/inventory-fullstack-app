import { getItems } from "@/api/InventoryApiService";
import { Navbar } from "@/components/navbar/Navbar";
import { Print } from "@/components/print/Print";
import { Search } from "@/components/search/Search";
import { Select } from "@/components/select/Select";
import { item, Tabel } from "@/components/tabel/Tabel";
import { useEffect, useMemo, useState } from "react";

export function Dashboard() {
  const [items, setItems] = useState<item[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getItems();
      setItems(data);
    };
    fetchData();
  }, []);

  const itemList: item[] = useMemo(
    () =>
      items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search, items]
  );

  return (
    <div className="h-screen flex flex-col">
      <Navbar></Navbar>
      <section className="h-10 grid grid-flow-col grid-cols-3 gap-2 m-2 mb-0">
        <Search setSearch={setSearch}></Search>
        <Select></Select>
        <Print></Print>
      </section>
      <Tabel items={itemList}></Tabel>
    </div>
  );
}
