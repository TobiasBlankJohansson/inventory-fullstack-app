import {useState} from "react";
import {Button} from "@/components";

type Props = {
  list: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

export function SelectableList({list, setSelected}: Props) {
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

const AreaItem = ({area, setSelected}: {
  area: string;
  setSelected: (prev: (prev: string[]) => string[]) => void;
}) => {
  const [select, setSelect] = useState(false);

  const handleClick = () => {
    setSelect((prev) => !prev);
    setSelected((prev) =>
      select ? prev.filter((item) => item !== area) : [...prev, area]
    );
  };

  return (
    <li>
      <Button
        onClick={handleClick}
        className={`px-2 min-h-full h-10 hover:bg-button_secondary hover:text-white ${
          select && "bg-button_secondary text-white border-button_secondary"
        }`}
      >
        {area}
      </Button>
    </li>
  );
};