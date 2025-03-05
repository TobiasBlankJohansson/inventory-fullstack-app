import {
  renderTableHeaders,
  renderTableItems,
  ScreenContainer,
} from "@/components";
import { BodyContainer } from "@/components/container/BodyContainer";
import { Navbar } from "@/components/navbar/Navbar";
import { StorageArea } from "@/components/storage_area/StorageArea";
import { Tabel } from "@/components/tabel/Tabel";
import { useManageData } from "@/hooks";
import { getItemHeaders } from "@/util";

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
          renderHeadersInTable={renderTableHeaders(getItemHeaders(items), true)}
          renderItemInTable={renderTableItems(items, true)}
        ></Tabel>
      </BodyContainer>
    </ScreenContainer>
  );
}
