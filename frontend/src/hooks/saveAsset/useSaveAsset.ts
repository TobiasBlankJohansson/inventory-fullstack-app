export const useSaveAsset = <T>(set: (updateFn: (prevData: T[]) => T[]) => void,
                                mutateAsync: (variables: string) => Promise<T>) => {
  return async function saveAsset(
    formId: string,
    addAnotherOne: boolean,
    setAddAnotherOne: React.Dispatch<React.SetStateAction<boolean>>,
    event?: React.FormEvent
  ) {
    const input: HTMLInputElement = document.getElementById(
      "input " + formId
    ) as HTMLInputElement;
    const name = input.value;
    const data = await mutateAsync(name);
    if (data) {
      set((prevData) => [...prevData, data]);
    }
    input.value = "";
    if (addAnotherOne) {
      event?.preventDefault();
      setAddAnotherOne(() => false);
    }
  }
}