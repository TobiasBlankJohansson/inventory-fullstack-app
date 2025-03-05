import jsPDF from "jspdf";
import { Button } from "../button";
import { item } from "@/types";
import autoTable from "jspdf-autotable";

type Props = {
  itemList: item[];
};

const getItemKeys = (item: item): (keyof item)[] => {
  return Object.keys(item) as (keyof item)[];
};

const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export function Print({itemList }: Props) {
  const handlePrint = () => {
    const doc = new jsPDF();
    doc.text('Inventory List', 10, 10);

    const keys = itemList.length > 0 ? getItemKeys(itemList[0]) : [];
    const headers = keys.map(capitalize);
    autoTable(doc, {
      startY: 20,
      head: [headers],
      body: itemList.map(item => keys.map(key => item[key] || '')),
    });
    doc.save('inventory.pdf');
  };

  return (
    <>
      <Button className="min-h-full h-full" onClick={handlePrint}>Print</Button>
    </>
  );
}
