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