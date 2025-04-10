import {
  BodyContainer,
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
import {CreateAssetModal} from "@/features";

export function InventoryManage() {
  const {
    itemList,
    checkedItems,
    storage,
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
              Equipment
            </FullHeightButton>
            <FullHeightButton onClick={() => openModal("Storage")}>
              Storage
            </FullHeightButton>
            <FullHeightButton onClick={() => openModal("Responsible")}>
              Responsible
            </FullHeightButton>
          </ThreeGridContainer>
        </ThreeGridContainer>
        <Table
          renderHeadersInTable={renderTableHeaders(
            getTableHeaders(itemList),
            setOrder,
            order,
            true,
            "item",
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
        storage={storage.map((storage) => storage.name)}
        setResponsible={setSelectedResponsible}
        responsible={responsible.map((responsible) => responsible.name)}
      ></Filter>
      <CreateAssetModal
        saveAsset={saveAsset.saveAssetEquipment}
        dialogName={"Equipment"}
        useId={true}
        useTable={true}
      ></CreateAssetModal>
      <CreateAssetModal
        saveAsset={saveAsset.saveAssetStorage}
        dialogName={"Storage"}
        useTable={true}
      ></CreateAssetModal>
      <CreateAssetModal
        saveAsset={saveAsset.saveAssetResponsible}
        dialogName={"Responsible"}
        useTable={true}
      ></CreateAssetModal>
    </ScreenContainer>
  );
}
