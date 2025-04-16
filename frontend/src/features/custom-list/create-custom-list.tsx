import {BodyContainer, FullHeightButton, Navbar, ScreenContainer, Search} from "@/components";
import {Filter} from "@/features";
import {openModal} from "@/lib";

export const CreateCustomList = () => {
  return <ScreenContainer>
    <Navbar currentPage={2} currentPageName={'CreateCustomList'}/>
    <BodyContainer>
      <div className={"h-10 grid grid-cols-2 gap-2"}>
        <section className={"w-full"}>
          <div className="grid grid-cols-2 gap-2 h-full">
            <Search setSearch={() => ""}/>
            <FullHeightButton onClick={() => openModal("filter")}>Filter</FullHeightButton>
          </div>
        </section>
        <section className={"w-full"}>
          <div className="grid grid-cols-2 gap-2 h-full">
            <FullHeightButton>Go to custom list</FullHeightButton>
            <FullHeightButton>Save custom list</FullHeightButton>
          </div>
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