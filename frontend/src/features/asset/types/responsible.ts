export type Responsible = {
  id: string;
  name: string;
};

export const responsibleFromList = (responsibleName: string, list: Responsible[]) => {
  return list.find((responsible) => responsible.name === responsibleName);
}