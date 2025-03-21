import {FormEvent, useState} from "react";
import {FORM_FIELDS_ITEM} from "@/constants.ts";
import {
  Equipment,
  FormField,
  Item,
  Responsible,
  responsibleFromList,
  Storage,
  storageFromList,
  toItemFromFormField
} from "@/types";
import {usePostItem} from "@/hooks";
import {toast} from "react-toastify";
import {postItemDto} from "@/api/InventoryFetch.ts";

export const useCreateItem = (
  setItems: (updateFn: (prevItems: Item[]) => Item[]) => void,
  options: {
    equipment: Equipment[];
    storageArea: Storage[];
    responsible: Responsible[];
  }
) => {
  const [addAnotherOne, setAddAnotherOne] = useState(false);
  const {mutate} = usePostItem();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formField = Object.fromEntries(
      FORM_FIELDS_ITEM.map(({key}) => [key, formData.get(`item_${key}`)])
    ) as FormField;

    if (parseInt(formField.quantity) < 1 || formField.quantity.includes(".")) {
      toast.error("Quantity can't be negative or contain decimal")
      return;
    }

    const newItem = toItemFromFormField(formField, options.equipment, "null")
    const form = e.currentTarget;
    setItems((prevItems) => {
      const isUnique = !prevItems.some(
        (item) =>
          item.equipment === newItem.equipment && item.responsible === newItem.responsible
      );

      if (!isUnique) {
        toast.error("Item already exists with equipment and responsible");
        return prevItems;
      }

      const itemDto: postItemDto = {
        equipmentId: newItem.equipment.id,
        amount: newItem.quantity,
        responsibleId: responsibleFromList(newItem.responsible, options.responsible)?.id ?? "",
        storageId: storageFromList(newItem.storageArea, options.storageArea)?.id ?? ""
      }
      console.log(itemDto)
      mutate(itemDto);
      const updatedItems = [...prevItems, newItem];

      if (form) {
        form.reset();
      }

      if (addAnotherOne) {
        setAddAnotherOne(false);
      } else {
        const dialog = document.getElementById(
          "create_item"
        ) as HTMLDialogElement;
        dialog.close();
      }

      return updatedItems;
    });
  };

  return {handleSubmit, setAddAnotherOne};
};
