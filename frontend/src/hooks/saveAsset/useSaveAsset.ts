import {toast} from "react-toastify";

type Asset = {
  name: string;
};

export const useSaveAsset = <T>(set: (updateFn: (prevData: T[]) => T[]) => void,
                                mutateAsync: (variables: string) => Promise<T>,
                                data: T[]) => {
  return async (
    formId: string,
    addAnotherOne: boolean,
    setAddAnotherOne: React.Dispatch<React.SetStateAction<boolean>>,
    event?: React.FormEvent
  ) => {
    const input: HTMLInputElement = document.getElementById(
      "input " + formId
    ) as HTMLInputElement;
    const name = input.value;

    if (data.some(item => (item as Asset).name === name)) {
      toast.error(formId + ' already exists');
      event?.preventDefault();
      return;
    }

    const asset = await mutateAsync(name);
    if (!asset) {
      toast.error("Wasn't saved, please try again");
      event?.preventDefault();
      return;
    }

    set((prevData) => [...prevData, asset]);
    input.value = "";

    if (addAnotherOne) {
      event?.preventDefault();
      setAddAnotherOne(() => false);
    }
  }
}