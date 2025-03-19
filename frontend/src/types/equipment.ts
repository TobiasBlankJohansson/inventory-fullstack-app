export type Equipment = {
  id: string;
  name: string;
};

export const EquipmentFromList = (equipmentName: string, list: Equipment[]) => {
  return list.find((equipment) => equipment.name === equipmentName);
}