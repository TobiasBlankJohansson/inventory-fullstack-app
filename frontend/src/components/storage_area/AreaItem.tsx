import { useState } from "react";
import { Button } from "../button";

type Props = {
  area: string;
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

export const AreaItem = ({ area, setSelected }: Props) => {
  const [select, setSelect] = useState(false);

  const handleClick = () => {
    setSelect((prev) => !prev);
    setSelected((prev) =>
      select ? prev.filter((item) => item !== area) : [...prev, area]
    );
  };

  return (
    <li key={`storage_${area}`}>
      <Button
        onClick={handleClick}
        className={`px-2 min-h-full h-full hover:bg-button_secondary hover:text-white ${
          select && "bg-button_secondary text-white border-button_secondary"
        }`}
      >
        {area}
      </Button>
    </li>
  );
};
