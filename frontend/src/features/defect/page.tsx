import {BodyContainer, Navbar, ScreenContainer, ThreeGridContainer} from "@/components";

export const DefectReport = () => {
  return <>
    <ScreenContainer>
      <Navbar currentPageName={"Defect Report"} currentPage={3}/>
      <BodyContainer>
        <ThreeGridContainer>

        </ThreeGridContainer>
      </BodyContainer>
    </ScreenContainer>
  </>
}


export type Defect = {
  id: string;
  responsible: string;
  date: string;
  filed: string;
  item: string;
  status: string;
  defect: string;
}