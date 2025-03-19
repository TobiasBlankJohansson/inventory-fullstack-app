export type Equipment = {
  id: string;
  name: string;
};

export const equipmentFromList = (equipmentName: string, list: Equipment[]) => {
  return list.find((equipment) => equipment.name === equipmentName);
}