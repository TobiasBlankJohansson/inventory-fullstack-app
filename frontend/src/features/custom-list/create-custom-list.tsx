import {BodyContainer, FullHeightButton, Navbar, ScreenContainer, Search} from "@/components";
import {Filter, Status} from "@/features";
import {openModal} from "@/lib";

export const CreateCustomList = () => {
  return <ScreenContainer>
    <Navbar currentPage={2} currentPageName={'CreateCustomList'}/>
    <BodyContainer>
      <div className={"grid grid-cols-2 gap-10 h-full"}>
        <section className={"w-full flex-col"}>
          <div className="h-10 grid grid-cols-2 gap-2">
            <Search setSearch={() => ""}/>
            <FullHeightButton onClick={() => openModal("filter")}>Filter</FullHeightButton>
          </div>
          <section className="bg-white rounded-md shadow w-full h-[calc(100vh-174px)]">
            <div className="overflow-x-auto h-full">
              <header className="bg-primary rounded-t-md flex justify-between items-center">
                <h2
                  className="text-white py-2 px-4 text-left text-sm font-medium">{Status.Registered}</h2>
              </header>
              <table className="table table-zebra table-pin-rows">
                <thead>
                <tr className="">
                  <th>Equipment</th>
                  <th>Date</th>
                  <th className={"text-center"}>Action</th>
                </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </section>
        </section>
        <section className={"w-full flex-col h-full"}>
          <div className="h-10 grid grid-cols-2 gap-2">
            <FullHeightButton>Go to custom list</FullHeightButton>
            <FullHeightButton>Save custom list</FullHeightButton>
          </div>
          <section className="bg-white rounded-md shadow w-full h-[calc(100vh-174px)]">
            <div className="overflow-x-auto h-full">
              <header className="bg-primary rounded-t-md flex justify-between items-center">
                <h2
                  className="text-white py-2 px-4 text-left text-sm font-medium">{Status.Registered}</h2>
              </header>
              <table className="table table-zebra table-pin-rows">
                <thead>
                <tr className="">
                  <th>Equipment</th>
                  <th>Date</th>
                  <th className={"text-center"}>Action</th>
                </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </section>
        </section>
      </div>
    </BodyContainer>
    <Filter
      setStorage={() => ""}
      storage={["stuff"]}
      setResponsible={() => ""}
      responsible={[]}
    />
  </ScreenContainer>;
}