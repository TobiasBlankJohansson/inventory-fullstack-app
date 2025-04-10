import {BodyContainer, FullHeightButton, Navbar, ScreenContainer, Search, Table,} from "@/components";
import {getTableHeaders, openModal} from "@/util";
import {ThreeGridContainer} from "@/components/container/ThreeGridContainer.tsx";
import {Filter, Print, renderTableHeaders, renderTableItems, useDashboardData} from "@/features";

export function Dashboard() {
  const {
    setSearch,
    itemList,
    setSelectedResponsible,
    storage,
    setSelectedStorage,
    responsible,
    setOrder,
    order,
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
          renderHeadersInTable={renderTableHeaders(
            getTableHeaders(itemList),
            setOrder,
            order
          )}
          renderItemInTable={renderTableItems(itemList)}
        ></Table>
      </BodyContainer>
      <Filter
        setStorage={setSelectedStorage}
        storage={storage.map((storage) => storage.name)}
        responsible={responsible.map((responsible) => responsible.name)}
        setResponsible={setSelectedResponsible}
      ></Filter>
    </ScreenContainer>
  );
}
