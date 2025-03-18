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
  Tabel,
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
