import {
  BodyContainer,
  CreateAsset,
  CreateItem,
  Filter,
  FullHeightButton,
  Navbar,
  renderTableHeaders,
  renderTableItems,
  ScreenContainer,
  Search,
  Table,
  ThreeGridContainer,
} from "@/components";
import {useManageData} from "@/hooks";
import {getTableHeaders, openModal} from "@/util";

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
    setSelectedResponsible,
    saveAsset,
    setOrder,
    order,
  } = useManageData();
  return (
    <ScreenContainer>
      <Navbar currentPage={1} currentPageName="Inventory Manage"></Navbar>
      <BodyContainer>
        <ThreeGridContainer>
          <Search setSearch={setSearch}></Search>
          <FullHeightButton onClick={() => openModal("filter")}>
            Filter
          </FullHeightButton>
          <ThreeGridContainer>
            <FullHeightButton onClick={() => openModal("Equipment")}>
              Add Equipment
            </FullHeightButton>
            <FullHeightButton onClick={() => openModal("Storage area")}>
              Add Storage
            </FullHeightButton>
            <FullHeightButton onClick={() => openModal("Responsible")}>
              Add Responsible
            </FullHeightButton>
          </ThreeGridContainer>
        </ThreeGridContainer>
        <Table
          renderHeadersInTable={renderTableHeaders(
            getTableHeaders(itemList),
            setOrder,
            order,
            true, "item",
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
        ></Table>
      </BodyContainer>
      <CreateItem setItems={setItems} items={itemList} options={options}/>
      <Filter
        setStorage={setSelectedStorage}
        storageArea={storageArea.map((storage) => storage.name)}
        setResponsible={setSelectedResponsible}
        responsible={responsible.map((responsible) => responsible.name)}
      ></Filter>
      <CreateAsset
        saveAsset={saveAsset.saveAssetEquipment}
        dialogName={"Equipment"}
        useId={true}
        useTable={true}
      ></CreateAsset>
      <CreateAsset
        saveAsset={saveAsset.saveAssetStorage}
        dialogName={"Storage area"}
        useTable={true}
      ></CreateAsset>
      <CreateAsset
        saveAsset={saveAsset.saveAssetResponsible}
        dialogName={"Responsible"}
        useTable={true}
      ></CreateAsset>
    </ScreenContainer>
  );
}
