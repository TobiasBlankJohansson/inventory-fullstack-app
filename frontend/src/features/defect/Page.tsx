import {BodyContainer, Navbar, ScreenContainer} from "@/components";
import {DefectTable} from "@/features/defect/components/DefectTable.tsx";
import {ShowDefectModel, sortDefectsByStatus, Status} from "@/features";
import {DefectReportModal} from "@/features/defect/components/CreateModel.tsx";
import {useGetDefect} from "@/features/defect/hooks/Defect.ts";

export type Defect = {
  id: string;
  responsible: string;
  date: string;
  filed: string;
  equipment: string;
  status: string;
  defect: string;
}

export const DefectReport = () => {
  const {defect, setDefect} = useGetDefect();
  const sortedDefects = sortDefectsByStatus(defect);
  return <ScreenContainer>
    <Navbar currentPageName={"Defect Report"} currentPage={3}/>
    <BodyContainer>
      <DefectTable registeredItems={sortedDefects[Status.Registered]}
                   processingItems={sortedDefects[Status.Processing]}
                   finalizedItems={sortedDefects[Status.Finalized]}
                   setDefects={setDefect}></DefectTable>
    </BodyContainer>
    <DefectReportModal></DefectReportModal>
    <ShowDefectModel></ShowDefectModel>
  </ScreenContainer>
}

