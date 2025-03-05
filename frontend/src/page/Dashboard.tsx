import { BodyContainer } from "@/components/container/BodyContainer";
import { Navbar } from "@/components/navbar/Navbar";
import { Print } from "@/components/print/Print";
import { Search } from "@/components/search/Search";
import { SelectStorage } from "@/components/select/select-storage";
import {
  renderHeadersInTableDashboard,
  renderItemInTableDashboard,
} from "@/components/tabel/Render";
import { Tabel } from "@/components/tabel/Tabel";
import { useDashboardData } from "@/hooks";

export function Dashboard() {
  const { setSearch, setStorageArea, itemList } = useDashboardData();

  return (
    <div className="h-screen flex flex-col">
      <Navbar currentPage={0} currentPageName="Dashboard"></Navbar>
      <BodyContainer>
        <section className="h-10 grid grid-flow-col grid-cols-3 gap-2 m-2 mb-0">
          <Search setSearch={setSearch}></Search>
          <SelectStorage setStorageArea={setStorageArea}></SelectStorage>
          <Print></Print>
        </section>
        <Tabel
          renderHeadersInTable={renderHeadersInTableDashboard([
            "Id",
            "Name",
            "Quantity",
            "Storage Area",
          ])}
          renderItemInTable={renderItemInTableDashboard(itemList)}
        ></Tabel>
      </BodyContainer>
    </div>
  );
}
