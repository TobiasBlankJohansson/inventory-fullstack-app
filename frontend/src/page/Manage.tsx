import {
  renderTableHeaders,
  renderTableItems,
  ScreenContainer,
  Search,
} from "@/components";
import { BodyContainer } from "@/components/container/BodyContainer";
import { CreateItem } from "@/components/modal/CreateItem";
import { Navbar } from "@/components/navbar/Navbar";
import { StorageArea } from "@/components/storage_area/StorageArea";
import { Tabel } from "@/components/tabel/Tabel";
import { useManageData } from "@/hooks";
import { getItemHeaders } from "@/util";

export function Manage() {
  const {
    itemList,
    checkedItems,
    storageArea,
    setItems,
    setStorageArea,
    setSearch,
    setSelected,
    handleDelete,
    setCheckedItems,
    handleCreate,
  } = useManageData();
  return (
    <ScreenContainer>
      <Navbar currentPage={1} currentPageName="Manage"></Navbar>
      <BodyContainer>
        <div className="flex mt">
          <div className="w-60">
            <Search setSearch={setSearch}></Search>
          </div>
          <StorageArea
            storageArea={storageArea}
            setStorageArea={setStorageArea}
            setSelected={setSelected}
          ></StorageArea>
        </div>
        <Tabel
          renderHeadersInTable={renderTableHeaders(
            getItemHeaders(itemList),
            true,
            checkedItems,
            handleDelete,
            handleCreate
          )}
          renderItemInTable={renderTableItems(
            itemList,
            true,
            checkedItems,
            setCheckedItems
          )}
        ></Tabel>
      </BodyContainer>
      <CreateItem setItems={setItems} storageAreas={storageArea} />
    </ScreenContainer>
  );
}
