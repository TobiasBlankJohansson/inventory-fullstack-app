import {Filter, renderTableHeaders, renderTableItems, ScreenContainer, Search,} from "@/components";
import {BodyContainer} from "@/components/container/BodyContainer";
import {CreateItem} from "@/components/modal/CreateItem";
import {Navbar} from "@/components/navbar/Navbar";
import {Tabel} from "@/components/tabel/Tabel";
import {useManageData} from "@/hooks";
import {getItemHeaders} from "@/util";

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
    responsible,
    setSelectedResponsible
  } = useManageData();
  return (
    <ScreenContainer>
      <Navbar currentPage={1} currentPageName="Inventory Manage"></Navbar>
      <BodyContainer>
        <div className="flex mt">
          <div className="w-60">
            <Search setSearch={setSearch}></Search>
          </div>
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
      <CreateItem setItems={setItems} options={options}/>
      <Filter setStorage={setSelectedStorage}
              storageArea={storageArea.map(storage => storage.name)}
              setResponsible={setSelectedResponsible}
              responsible={responsible.map(responsible => responsible.name)}></Filter>
    </ScreenContainer>
  );
}
