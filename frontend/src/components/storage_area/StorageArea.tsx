type importStorageArea = {
    storageArea: string[];
}

export function StorageArea({storageArea}:importStorageArea) {
  return (
    <ol className="flex h-12 gap-2 m-2 mb-0 overflow-scroll scrollbar-hide">
      <li className="px-2 w-10 text-xl btn min-h-full h-full">+</li>
      <li className="px-2 btn min-h-full h-full">Verksdag</li>
      <li className="px-2 btn min-h-full h-full">Verksdag</li>
      <li className="px-2 btn min-h-full h-full">Verksdag</li>
      <li className="px-2 btn min-h-full h-full">Verksdag</li>
    </ol>
  );
}
