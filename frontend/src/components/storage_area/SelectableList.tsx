import { AreaItem } from "./AreaItem";

type Props = {
  list: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

export function SelectableList({ list, setSelected }: Props) {
  return (
    <>
      <ol className="flex gap-2 min-[768px]:flex-wrap max-[768px]:overflow-scroll">
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
