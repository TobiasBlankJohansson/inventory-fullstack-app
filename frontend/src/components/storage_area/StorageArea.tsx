import { AreaItem } from "./AreaItem";

type Props = {
  storageArea: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

export function StorageArea({ storageArea, setSelected }: Props) {
  return (
    <>
      <ol className="flex h-12 gap-2 overflow-scroll scrollbar-hide">
        {storageArea.map((area) => (
          <AreaItem
            key={"area_" + area}
            area={area}
            setSelected={setSelected}
          />
        ))}
      </ol>
    </>
  );
}
