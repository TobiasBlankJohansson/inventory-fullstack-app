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