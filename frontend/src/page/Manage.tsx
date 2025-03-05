import { ScreenContainer } from "@/components";
import { BodyContainer } from "@/components/container/BodyContainer";
import { Navbar } from "@/components/navbar/Navbar";
import { StorageArea } from "@/components/storage_area/StorageArea";
import {
  renderHeadersInTableManage,
  renderItemInTableManage,
} from "@/components/tabel/Render";
import { Tabel } from "@/components/tabel/Tabel";
import { useManageData } from "@/hooks";

export function Manage() {
  const { items, storageArea, setStorageArea } = useManageData();

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
