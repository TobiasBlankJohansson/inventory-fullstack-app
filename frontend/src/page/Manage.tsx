import { getItems } from "@/api/InventoryApiService";
import { Navbar } from "@/components/navbar/Navbar";
import { StorageArea } from "@/components/storage_area/StorageArea";
import {
  renderHeadersInTableManage,
  renderItemInTableManage,
} from "@/components/tabel/Render";
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
      <StorageArea
        storageArea={["Verksdag", "Annex", "Bothuset"]}
      ></StorageArea>
      <Tabel
        renderHeadersInTable={renderHeadersInTableManage([
          "Id",
          "Name",
          "Quantity",
          "Storage Area",
        ])}
        renderItemInTable={renderItemInTableManage(items)}
      ></Tabel>
    </div>
  );
}
