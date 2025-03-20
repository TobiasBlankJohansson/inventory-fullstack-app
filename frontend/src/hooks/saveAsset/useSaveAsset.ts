import {toast} from "react-toastify";

type Asset = {
  name: string;
  id?: string;
};

export const useSaveAsset = <T>(
  set: (updateFn: (prevData: T[]) => T[]) => void,
  mutateAsync: (...args: [string] | [string, string]) => Promise<T>,
  data: T[]
) => {
  return async (
    formId: string,
    addAnotherOne: boolean,
    setAddAnotherOne: React.Dispatch<React.SetStateAction<boolean>>,
    event?: React.FormEvent
  ) => {
    const inputName: HTMLInputElement = document.getElementById(
      "input name " + formId
    ) as HTMLInputElement;
    const name = inputName.value;
    const inputId: HTMLInputElement = document.getElementById(
      "input id " + formId
    ) as HTMLInputElement;
    const id = inputId.value;

    if (data.some(item => (item as Asset).name === name)) {
      toast.error(formId + ' already exists with that name');
      event?.preventDefault();
      return;
    }

    if (id && id.length != 6) {
      toast.error('Id needs to be at least 6 numbers long');
      event?.preventDefault();
      return;
    }

    if (id && data.some(item => (item as Asset).id === id)) {
      toast.error(formId + ' already exists with that id');
      event?.preventDefault();
      return;
    }

    const asset = await mutateAsync(name, id);
    if (!asset) {
      toast.error("Wasn't saved, please try again");
      event?.preventDefault();
      return;
    }
    toast.success("Saved successfully");
    set((prevData) => [...prevData, asset]);
    inputName.value = "";
    inputId.value = "";

    if (addAnotherOne) {
      event?.preventDefault();
      setAddAnotherOne(() => false);
    }
  }
}