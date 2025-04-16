import jsPDF from "jspdf";
import {Button} from "../../../components/button";
import autoTable from "jspdf-autotable";
import {capitalize, getItemKeys} from "@/lib";
import {fromItemToPrintItem} from "@/features/item/types/print-item.ts";
import {Item} from "@/features/item/types";

type Props = {
  itemList: Item[];
};

export function Print({itemList}: Props) {
  const handlePrint = () => {
    const doc = new jsPDF();
    doc.text("Inventory List", 10, 10);

    const keys = itemList.length > 0 ? getItemKeys(itemList[0]) : [];
    const headers = keys.map(capitalize);

    autoTable(doc, {
      startY: 20,
      head: [headers],
      body: itemList.map((item) => keys.map((key) => fromItemToPrintItem(item)[key] || "")),
    });
    doc.save("inventory.pdf");
  };

  return (
    <Button className="min-h-full h-full" onClick={handlePrint}>
      Print
    </Button>
  );
}
