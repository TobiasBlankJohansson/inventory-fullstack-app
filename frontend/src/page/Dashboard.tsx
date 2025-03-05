import { renderTableHeaders, renderTableItems, ScreenContainer } from "@/components";
import { BodyContainer } from "@/components";
import { Navbar } from "@/components";
import { Print } from "@/components";
import { Search } from "@/components";
import { SelectStorage } from "@/components";

import { Tabel } from "@/components";
import { useDashboardData } from "@/hooks";

export function Dashboard() {
  const { setSearch, setStorageArea, itemList } = useDashboardData();

  return (
    <ScreenContainer>
      <Navbar currentPage={0} currentPageName="Dashboard"></Navbar>
      <BodyContainer>
        <section className="h-10 grid grid-flow-col grid-cols-3 gap-2 m-2 mb-0">
          <Search setSearch={setSearch}></Search>
          <SelectStorage setStorageArea={setStorageArea}></SelectStorage>
          <Print itemList={itemList}></Print>
        </section>
        <Tabel
          renderHeadersInTable={renderTableHeaders([
            "Id",
            "Name",
            "Quantity",
            "Storage Area",
          ])}
          renderItemInTable={renderTableItems(itemList)}
        ></Tabel>
      </BodyContainer>
    </ScreenContainer>
  );
}
