export type Storage = {
  id: string;
  name: string;
};

export const storageFromList = (storageName: string, list: Storage[]) => {
  return list.find((storage) => storage.name === storageName);
}
