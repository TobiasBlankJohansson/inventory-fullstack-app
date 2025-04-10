import {toast} from "react-toastify";
import {UseMutationResult} from "@tanstack/react-query";
import {Asset} from "@/features";

export const saveAsset = <T>(
  set: (updateFn: (prevData: T[]) => T[]) => void,
  {mutateAsync}: UseMutationResult<T, Error, T, unknown>,
  data: T[]
) => {
  return async (
    formId: string,
    addAnotherOne: boolean,
    setAddAnotherOne: React.Dispatch<React.SetStateAction<boolean>>,
    event?: React.FormEvent
  ) => {
    event?.preventDefault();
    const inputId: HTMLInputElement = document.getElementById(
      "input id " + formId
    ) as HTMLInputElement;

    let id: string = "";
    if (inputId != undefined) {
      const selectId: HTMLInputElement = document.getElementById(
        "select id " + formId
      ) as HTMLInputElement;
      id = selectId.value + inputId.value;

      if (id && id.length != 4) {
        toast.error("Id needs to be at least 4 numbers long");
        return;
      }

      if (id && data.some((item) => (item as Asset).id === id)) {
        toast.error(formId + " already exists with that id");
        return;
      }
    }

    const inputName: HTMLInputElement = document.getElementById(
      "input name " + formId
    ) as HTMLInputElement;
    const name = inputName.value;

    if (data.some((item) => (item as Asset).name === name)) {
      toast.error(formId + " already exists with that name");
      return;
    }

    const asset = await mutateAsync({name, id} as T);
    if (!asset) {
      toast.error("Wasn't saved, please try again");
      return;
    }
    toast.success("Saved successfully");
    set((prevData) => [...prevData, asset]);
    if (inputId != undefined) {
      inputId.value = String(parseInt(id) + 1).slice(1);
    }
    inputName.value = "";

    if (addAnotherOne) {
      setAddAnotherOne(() => false);
      return
    }
    const dialog = document.getElementById(
      formId
    ) as HTMLDialogElement;
    dialog.close();
  };
};
