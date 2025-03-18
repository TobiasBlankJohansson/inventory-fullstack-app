import {
  BodyContainer,
  Button,
  Filter,
  Navbar,
  Print,
  renderTableHeaders,
  renderTableItems,
  ScreenContainer,
  Search,
  Tabel,
} from "@/components";
import {useDashboardData} from "@/hooks";
import {getItemHeaders} from "@/util";

export function Dashboard() {
  const {
    setSearch,
    itemList,
    setSelectedResponsible,
    storageArea,
    setSelectedStorage,
    responsible,
  } = useDashboardData();

  return (
    <ScreenContainer>
      <Navbar currentPage={0} currentPageName="Dashboard"></Navbar>
      <BodyContainer>
        <section className="h-10 grid grid-flow-col grid-cols-3 gap-2">
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
          <Print itemList={itemList}></Print>
        </section>
        <Tabel
          renderHeadersInTable={renderTableHeaders(getItemHeaders(itemList))}
          renderItemInTable={renderTableItems(itemList)}
        ></Tabel>
      </BodyContainer>
      <Filter
        setStorage={setSelectedStorage}
        storageArea={storageArea.map((storage) => storage.name)}
        responsible={responsible.map((responsible) => responsible.name)}
        setResponsible={setSelectedResponsible}
      ></Filter>
    </ScreenContainer>
  );
}
