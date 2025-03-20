import {
  BodyContainer,
  Filter,
  FullHeightButton,
  Navbar,
  Print,
  renderTableHeaders,
  renderTableItems,
  ScreenContainer,
  Search,
  Table,
} from "@/components";
import {useDashboardData} from "@/hooks";
import {getItemHeaders, openModal} from "@/util";
import {ThreeGridContainer} from "@/components/container/ThreeGridContainer.tsx";

export function Dashboard() {
  const {
    setSearch,
    itemList,
    setSelectedResponsible,
    storageArea,
    setSelectedStorage,
    responsible,
    setOrder, order
  } = useDashboardData();

  return (
    <ScreenContainer>
      <Navbar currentPage={0} currentPageName="Dashboard"></Navbar>
      <BodyContainer>
        <ThreeGridContainer>
          <Search setSearch={setSearch}></Search>
          <FullHeightButton onClick={() => openModal("filter")}>
            Filter
          </FullHeightButton>
          <Print itemList={itemList}></Print>
        </ThreeGridContainer>
        <Table
          renderHeadersInTable={renderTableHeaders(getItemHeaders(itemList), setOrder, order)}
          renderItemInTable={renderTableItems(itemList)}
        ></Table>
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
