import {BodyContainer, Navbar, ScreenContainer} from "@/components";
import {DefectTable} from "@/features/defect/components/defectTable.tsx";

export type DefectTableItem = {
  id: string;
  date: string;
  item: string;
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

export const DefectReport = () => {
  const sortedDefects = sortDefectsByStatus(defects);
  return <ScreenContainer>
    <Navbar currentPageName={"Defect Report"} currentPage={3}/>
    <BodyContainer>
      <DefectTable registeredItems={convertToDefectTableItems(sortedDefects["Registered"])}
                   processingItems={convertToDefectTableItems(sortedDefects["Processing"])}
                   finalizedItems={convertToDefectTableItems(sortedDefects["Finalized"])}></DefectTable>
    </BodyContainer>
  </ScreenContainer>

}

function sortDefectsByStatus(defects: Defect[]) {
  return defects.reduce((result, defect) => {
    if (!result[defect.status]) {
      result[defect.status] = [];
    }

    result[defect.status].push(defect);

    return result;
  }, {} as Record<string, Defect[]>);
}

function convertToDefectTableItems(defects: Defect[]): DefectTableItem[] {
  return defects.map(defect => ({
    id: defect.id,
    date: defect.date,
    item: defect.item
  }));
}

const defects: Defect[] = [
  {
    id: "1",
    responsible: "John Doe",
    date: "2025-04-01",
    filed: "2025-04-01",
    item: "Axe",
    status: "Registered",
    defect: "Broken"
  },
  {
    id: "2",
    responsible: "Jane Smith",
    date: "2025-04-02",
    filed: "2025-04-02",
    item: "Spirit Burner",
    status: "Processing",
    defect: "Missing"
  },
  {
    id: "3",
    responsible: "Emily Johnson",
    date: "2025-04-03",
    filed: "2025-04-03",
    item: "Hammer",
    status: "Finalized",
    defect: "Cracked"
  },
  {
    id: "4",
    responsible: "Michael Brown",
    date: "2025-04-04",
    filed: "2025-04-04",
    item: "Screwdriver",
    status: "Registered",
    defect: "Worn out"
  },
  {
    id: "5",
    responsible: "Sarah Wilson",
    date: "2025-04-05",
    filed: "2025-04-05",
    item: "Drill",
    status: "Processing",
    defect: "Defective motor"
  },
  {
    id: "6",
    responsible: "David Clark",
    date: "2025-04-06",
    filed: "2025-04-06",
    item: "Wrench",
    status: "Registered",
    defect: "Rusty"
  },
  {
    id: "7",
    responsible: "Laura Green",
    date: "2025-04-07",
    filed: "2025-04-07",
    item: "Plunger",
    status: "Finalized",
    defect: "Cracked handle"
  },
  {
    id: "8",
    responsible: "Chris Adams",
    date: "2025-04-08",
    filed: "2025-04-08",
    item: "Chainsaw",
    status: "Processing",
    defect: "Fuel leakage"
  },
  {
    id: "9",
    responsible: "Olivia Taylor",
    date: "2025-04-09",
    filed: "2025-04-09",
    item: "Shovel",
    status: "Registered",
    defect: "Bent"
  },
  {
    id: "10",
    responsible: "James Miller",
    date: "2025-04-10",
    filed: "2025-04-10",
    item: "Drill Bit",
    status: "Finalized",
    defect: "Chipped"
  },
  {
    id: "11",
    responsible: "Sophia White",
    date: "2025-04-11",
    filed: "2025-04-11",
    item: "Crowbar",
    status: "Registered",
    defect: "Warped"
  },
  {
    id: "12",
    responsible: "Ethan Harris",
    date: "2025-04-12",
    filed: "2025-04-12",
    item: "Pry Bar",
    status: "Processing",
    defect: "Bent"
  },
  {
    id: "13",
    responsible: "Mia King",
    date: "2025-04-13",
    filed: "2025-04-13",
    item: "Hacksaw",
    status: "Finalized",
    defect: "Loose blade"
  },
  {
    id: "14",
    responsible: "Alexander Scott",
    date: "2025-04-14",
    filed: "2025-04-14",
    item: "Level",
    status: "Processing",
    defect: "Bubble broken"
  },
  {
    id: "15",
    responsible: "Grace Lewis",
    date: "2025-04-15",
    filed: "2025-04-15",
    item: "Tape Measure",
    status: "Finalized",
    defect: "Stuck mechanism"
  }
];