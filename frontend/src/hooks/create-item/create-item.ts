import { FormEvent, useState } from "react";
import { FORM_FIELDS_ITEM } from "@/constants.ts";
import {
  Equipment,
  FormFieldItem,
  Item,
  Responsible,
  responsibleFromList,
  Storage,
  storageFromList,
  toItemFromFormField,
} from "@/types";
import { usePostItem } from "@/hooks";
import { toast } from "react-toastify";
import { postItemDto } from "@/api/InventoryFetch.ts";

export const useCreateItem = (
  setItems: (updateFn: (prevItems: Item[]) => Item[]) => void,
  Items: Item[],
  options: {
    equipment: Equipment[];
    storage: Storage[];
    responsible: Responsible[];
  }
) => {
  const [addAnotherOne, setAddAnotherOne] = useState(false);
  const { mutateAsync } = usePostItem();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formField = Object.fromEntries(
      FORM_FIELDS_ITEM.map(({ key }) => [
        key,
        formData.get(`form_field_${key}`),
      ])
    ) as FormFieldItem;

    if (parseInt(formField.quantity) < 1 || formField.quantity.includes(".")) {
      toast.error("Quantity can't be negative or contain decimal");
      return;
    }

    const newItem = toItemFromFormField(formField, options.equipment, "null");
    const isUnique = !Items.some(
      (item) =>
        item.equipment.id === newItem.equipment.id &&
        item.responsible === newItem.responsible
    );

    if (!isUnique) {
      toast.error("Item already exists with equipment and responsible");
      return;
    }

    const itemDto: postItemDto = {
      equipmentId: newItem.equipment.id,
      amount: newItem.quantity,
      responsibleId:
        responsibleFromList(newItem.responsible, options.responsible)?.id ?? "",
      storageId: storageFromList(newItem.storage, options.storage)?.id ?? "",
    };

    const item = await mutateAsync(itemDto);
    const updatedItems = [...Items, item];

    handlePostSubmitSuccess(e.currentTarget, updatedItems);
  };

  const handlePostSubmitSuccess = (
    form: HTMLFormElement,
    updatedItems: Item[]
  ) => {
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
    setItems(() => updatedItems);
  };

  return { handleSubmit, setAddAnotherOne };
};
