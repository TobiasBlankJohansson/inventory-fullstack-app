import {BodyContainer, FullHeightButton, Navbar, ScreenContainer, Search} from "@/components";
import {Filter} from "@/features";
import {openModal} from "@/lib";

export const CreateCustomList = () => {
  return <ScreenContainer>
    <Navbar currentPage={2} currentPageName={'CreateCustomList'}/>
    <BodyContainer>
      <div className={"flex flex-col gap-2 md:flex-row md:gap-10 h-full"}>
        <section className="w-full h-full flex flex-col">
          <div className="h-10 grid grid-cols-2 gap-2">
            <Search setSearch={() => ""}/>
            <FullHeightButton onClick={() => openModal("filter")}>Filter</FullHeightButton>
          </div>

          <section className="bg-white rounded-md shadow w-full mt-2 flex-1 flex flex-col overflow-hidden">
            <header className="bg-primary rounded-t-md flex justify-between items-center">
              <h2 className="text-white py-2 px-4 text-left text-sm font-medium">
                Inventory items
              </h2>
            </header>

            <div className="overflow-x-auto overflow-y-auto flex-1">
              <table className="table table-zebra table-pin-rows w-full">
                <thead>
                <tr>
                  <th>Equipment</th>
                  <th>Date</th>
                  <th className="text-center">Action</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
          </section>
        </section>
        <section className="w-full h-full flex flex-col">
          <div className="h-10 grid grid-cols-2 gap-2">
            <FullHeightButton>Go to custom list</FullHeightButton>
            <FullHeightButton>Save custom list</FullHeightButton>
          </div>

          <section className="bg-white rounded-md shadow w-full mt-2 flex-1 flex flex-col overflow-hidden">
            <header className="bg-primary rounded-t-md flex justify-between items-center">
              <h2 className="text-white py-2 px-4 text-left text-sm font-medium">
                Custom list
              </h2>
            </header>

            <div className="overflow-x-auto overflow-y-auto flex-1">
              <table className="table table-zebra table-pin-rows w-full">
                <thead>
                <tr>
                  <th>Equipment</th>
                  <th>Date</th>
                  <th className="text-center">Action</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
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