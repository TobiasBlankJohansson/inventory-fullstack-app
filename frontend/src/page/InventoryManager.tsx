import {
  BodyContainer,
  Button,
  CreateItem,
  Filter,
  Navbar,
  renderTableHeaders,
  renderTableItems,
  ScreenContainer,
  Search,
  Tabel,
  ThreeGridContainer,
} from "@/components";
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
        <ThreeGridContainer>
          <Search setSearch={setSearch}></Search>
          <Button
            className="min-h-full h-full"
            onClick={() =>
              (
                document.getElementById("filter") as HTMLDialogElement
              ).showModal()
            }
          >
            Filter
          </Button>
          <ThreeGridContainer>
            <Button className="min-h-full h-full">Add Equipment</Button>
            <Button className="min-h-full h-full">Add Storage</Button>
            <Button className="min-h-full h-full">Add Responsible</Button>
          </ThreeGridContainer>
        </ThreeGridContainer>
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
