import { getItems } from "@/api/InventoryApiService";
import { ScreenContainer } from "@/components";
import { BodyContainer } from "@/components/container/BodyContainer";
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
  const [storageArea, setStorageArea] = useState<string[]>([
    "Verksdag",
    "Annex",
    "Bothuset",
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getItems();
      setItems(data);
    };
    fetchData();
  }, []);

  return (
    <ScreenContainer>
      <Navbar currentPage={1} currentPageName="Manage"></Navbar>
      <BodyContainer>
        <StorageArea
          storageArea={storageArea}
          setStorageArea={setStorageArea}
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
      </BodyContainer>
    </ScreenContainer>
  );
}
