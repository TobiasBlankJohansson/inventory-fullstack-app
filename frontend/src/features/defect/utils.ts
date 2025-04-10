import {Defect} from "@/features";

export function sortDefectsByStatus(defects: Defect[]) {
  return defects.reduce((result, defect) => {
    if (!result[defect.status]) {
      result[defect.status] = [];
    }

    result[defect.status].push(defect);

    return result;
  }, {} as Record<string, Defect[]>);
}

export const dateToday = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const dd = String(today.getDate()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd}`;
}