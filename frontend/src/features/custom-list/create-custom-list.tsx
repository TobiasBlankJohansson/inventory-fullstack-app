import {BodyContainer, Button, FullHeightButton, Navbar, ScreenContainer, Search} from "@/components";
import {Filter, Item, useFilterItems, useGetItems, useResponsible, useStorage} from "@/features";
import {openModal} from "@/lib";

export const CreateCustomList = () => {
  const {items} = useGetItems();
  const {asset: storage} = useStorage();
  const {asset: responsible} = useResponsible();
  const {itemList, setSearch, setSelectedStorage, setSelectedResponsible} = useFilterItems(items);

  const InventoryItem = (item: Item, left = true) => {
    return (
      <tr key={item.id}>
        <td className="p-1 py-3 pl-3">
          {item.equipment.name}
        </td>
        <td className="p-1">{item.quantity}</td>
        <td className="p-1">{item.storage}</td>
        <td className="p-1">
          <div className="tooltip tooltip-left w-full" data-tip={`Responsible: ${item.responsible}`}>
            <label className="input input-bordered flex items-center gap-2 h-full rounded-full">
              <input
                type="number"
                className="w-1 grow"
                placeholder="All"
                min={0}
                max={item.quantity}
              />
            </label></div>
        </td>
        <td className="p-1 text-center">
          <Button className="btn-xs h-7 bg-button_secondary hover:bg-button_secondary_hover">
            <span className="text-white">{left ? "→" : "←"}</span>
          </Button>
        </td>
      </tr>
    );
  };

  return <ScreenContainer>
    <Navbar currentPage={2} currentPageName={'CreateCustomList'}/>
    <BodyContainer>
      <div className={"flex flex-col gap-2 md:flex-row md:gap-10 h-full"}>
        <section className="w-full h-full flex flex-col">
          <div className="h-10 grid grid-cols-2 gap-2">
            <Search setSearch={setSearch}/>
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
                  <th className="p-1 py-3 pl-3">Equipment</th>
                  <th className="p-1">Quantity</th>
                  <th className="p-1">Storage</th>
                  <th className="p-1 text-center">Amount</th>
                  <th className="p-1 text-center">Action</th>
                </tr>
                </thead>
                <tbody>
                {itemList.map((item) => InventoryItem(item))}
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
              <Button
                className={"flex justify-center px-5 w-fit mr-4 btn-xs text-white " +
                  "bg-button_secondary border-button_secondary hover:bg-button_secondary_hover hover:border-button_secondary"}
                onClick={() => openModal("defect_report_modal")}>
                Print Custom List
              </Button>
            </header>

            <div className="overflow-x-auto overflow-y-auto flex-1">
              <table className="table table-zebra table-pin-rows w-full">
                <thead>
                <tr>
                  <th className="p-1 py-3 pl-3">Equipment</th>
                  <th className="p-1">Quantity</th>
                  <th className="p-1">Storage</th>
                  <th className="p-1 text-center">Amount</th>
                  <th className="p-1 text-center">Action</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item) => InventoryItem(item, false))}
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </div>
    </BodyContainer>
    <Filter
      setStorage={setSelectedStorage}
      storage={storage.map((storage) => storage.name)}
      setResponsible={setSelectedResponsible}
      responsible={responsible.map((responsible) => responsible.name)}
    />
  </ScreenContainer>;
}