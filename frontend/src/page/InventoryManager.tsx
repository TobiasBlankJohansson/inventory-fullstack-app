import {
  renderTableHeaders,
  renderTableItems,
  ScreenContainer,
  Search,
  SelectableList,
} from "@/components";
import { BodyContainer } from "@/components/container/BodyContainer";
import { CreateItem } from "@/components/modal/CreateItem";
import { Navbar } from "@/components/navbar/Navbar";
import { Tabel } from "@/components/tabel/Tabel";
import { useManageData } from "@/hooks";
import { getItemHeaders } from "@/util";

export function InventoryManage() {
  const {
    itemList,
    checkedItems,
    storageArea,
    options,
    setItems,
    setSearch,
    setSelectedStorage,
    handleDelete,
    setCheckedItems,
    handleCreate,
  } = useManageData();
  return (
    <ScreenContainer>
      <Navbar currentPage={1} currentPageName="Inventory Manage"></Navbar>
      <BodyContainer>
        <div className="flex mt">
          <div className="w-60">
            <Search setSearch={setSearch}></Search>
          </div>
          <SelectableList
            list={storageArea}
            setSelected={setSelectedStorage}
          ></SelectableList>
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
      <CreateItem setItems={setItems} options={options} />
    </ScreenContainer>
  );
}
