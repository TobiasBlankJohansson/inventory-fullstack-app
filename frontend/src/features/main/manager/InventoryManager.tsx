import {
  BodyContainer,
  DeleteCheck,
  FullHeightButton,
  Navbar,
  ScreenContainer,
  Search,
  Table,
  ThreeGridContainer,
  useScreen
} from "@/components";
import {CreateAssetModal, CreateItem, Filter, renderTableHeaders, renderTableItems, useManageData} from "@/features";
import {getTableHeaders, openModal} from "@/lib";

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

  const {isLaptop} = useScreen();

  const assetMenuPhone = () => {
    return <ul className="menu menu-horizontal bg-base-200 rounded-lg min-h-0 p-0">
      <li className="w-full h-full">
        <details className="h-full">
          <summary className="p-0 m-0 h-full flex justify-center items-center font-medium">Asset</summary>
          <ul className="z-10 w-full flex flex-col gap-2 h-fit">
            <li className="h-10"><FullHeightButton onClick={() => openModal("Equipment")}>
              Equipment
            </FullHeightButton></li>
            <li className="h-10"><FullHeightButton onClick={() => openModal("Storage")}>
              Storage
            </FullHeightButton></li>
            <li className="h-10"><FullHeightButton onClick={() => openModal("Responsible")}>
              Responsible
            </FullHeightButton></li>
          </ul>
        </details>
      </li>
    </ul>
  }

  const assetMenuLaptop = () => {
    return <ThreeGridContainer>
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
  }

  return (
    <ScreenContainer>
      <Navbar currentPage={1} currentPageName="Inventory Manage"></Navbar>
      <BodyContainer>
        <ThreeGridContainer>
          <Search setSearch={setSearch}></Search>
          <FullHeightButton onClick={() => openModal("filter")}>
            Filter
          </FullHeightButton>
          {isLaptop ? assetMenuLaptop() : assetMenuPhone()}
        </ThreeGridContainer>
        <Table
          renderHeadersInTable={renderTableHeaders(
            getTableHeaders(itemList),
            setOrder,
            order,
            true,
            "item",
            checkedItems,
            () => openModal("delete_check"),
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
      <DeleteCheck name={"item"} deleteFunction={handleDelete}></DeleteCheck>
    </ScreenContainer>
  );
}
