import {Equipment, Item, Responsible, Storage} from "@/types";

export const useEditEquipment =
  (id: string,
   items: Item[],
   setItems: (updateFn: (prevData: Item[]) => Item[]) => void,
   equipments: Equipment[],
   responsible: Responsible[],
   storageArea: Storage[],
   setEdit: React.Dispatch<React.SetStateAction<boolean>>) => {