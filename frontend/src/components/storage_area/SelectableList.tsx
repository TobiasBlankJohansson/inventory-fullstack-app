import { AreaItem } from "./AreaItem";

type Props = {
  list: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

export function SelectableList({ list, setSelected }: Props) {
  return (
    <>
      <ol className="flex h-12 gap-2 overflow-scroll scrollbar-hide">
        {list.map((item) => (
          <AreaItem
            key={"area_" + item}
            area={item}
            setSelected={setSelected}
          />
        ))}
      </ol>
    </>
  );
}
