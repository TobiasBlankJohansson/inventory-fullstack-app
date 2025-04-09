import {BodyContainer, Navbar, ScreenContainer} from "@/components";
import {DefectTable} from "@/features/defect/components/DefectTable.tsx";
import {useState} from "react";
import {sortDefectsByStatus, Status} from "@/features";
import {DefectReportModal} from "@/features/defect/components/CreateModel.tsx";

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
  const [defects, setDefects] = useState<Defect[]>(defectsMock);
  const sortedDefects = sortDefectsByStatus(defects);
  return <ScreenContainer>
    <Navbar currentPageName={"Defect Report"} currentPage={3}/>
    <BodyContainer>
      <DefectTable registeredItems={sortedDefects[Status.Registered]}
                   processingItems={sortedDefects[Status.Processing]}
                   finalizedItems={sortedDefects[Status.Finalized]}
                   setDefects={setDefects}></DefectTable>
    </BodyContainer>
    <DefectReportModal></DefectReportModal>
  </ScreenContainer>
}

const defectsMock: Defect[] = [
  {
    id: "1",
    responsible: "John Doe",
    date: "2025-04-01",
    filed: "2025-04-01",
    equipment: "Axe",
    status: "Registered",
    defect: "Broken"
  },
  {
    id: "2",
    responsible: "Jane Smith",
    date: "2025-04-02",
    filed: "2025-04-02",
    equipment: "Spirit Burner",
    status: "Processing",
    defect: "Missing"
  },
  {
    id: "3",
    responsible: "Emily Johnson",
    date: "2025-04-03",
    filed: "2025-04-03",
    equipment: "Hammer",
    status: "Finalized",
    defect: "Cracked"
  },
  {
    id: "4",
    responsible: "Michael Brown",
    date: "2025-04-04",
    filed: "2025-04-04",
    equipment: "Screwdriver",
    status: "Registered",
    defect: "Worn out"
  },
  {
    id: "5",
    responsible: "Sarah Wilson",
    date: "2025-04-05",
    filed: "2025-04-05",
    equipment: "Drill",
    status: "Processing",
    defect: "Defective motor"
  },
  {
    id: "6",
    responsible: "David Clark",
    date: "2025-04-06",
    filed: "2025-04-06",
    equipment: "Wrench",
    status: "Registered",
    defect: "Rusty"
  },
  {
    id: "7",
    responsible: "Laura Green",
    date: "2025-04-07",
    filed: "2025-04-07",
    equipment: "Plunger",
    status: "Finalized",
    defect: "Cracked handle"
  },
  {
    id: "8",
    responsible: "Chris Adams",
    date: "2025-04-08",
    filed: "2025-04-08",
    equipment: "Chainsaw",
    status: "Processing",
    defect: "Fuel leakage"
  },
  {
    id: "9",
    responsible: "Olivia Taylor",
    date: "2025-04-09",
    filed: "2025-04-09",
    equipment: "Shovel",
    status: "Registered",
    defect: "Bent"
  },
  {
    id: "10",
    responsible: "James Miller",
    date: "2025-04-10",
    filed: "2025-04-10",
    equipment: "Drill Bit",
    status: "Finalized",
    defect: "Chipped"
  },
  {
    id: "11",
    responsible: "Sophia White",
    date: "2025-04-11",
    filed: "2025-04-11",
    equipment: "Crowbar",
    status: "Registered",
    defect: "Warped"
  },
  {
    id: "12",
    responsible: "Ethan Harris",
    date: "2025-04-12",
    filed: "2025-04-12",
    equipment: "Pry Bar",
    status: "Processing",
    defect: "Bent"
  },
  {
    id: "13",
    responsible: "Mia King",
    date: "2025-04-13",
    filed: "2025-04-13",
    equipment: "Hacksaw",
    status: "Finalized",
    defect: "Loose blade"
  },
  {
    id: "14",
    responsible: "Alexander Scott",
    date: "2025-04-14",
    filed: "2025-04-14",
    equipment: "Level",
    status: "Processing",
    defect: "Bubble broken"
  },
  {
    id: "15",
    responsible: "Grace Lewis",
    date: "2025-04-15",
    filed: "2025-04-15",
    equipment: "Tape Measure",
    status: "Finalized",
    defect: "Stuck mechanism"
  }
];