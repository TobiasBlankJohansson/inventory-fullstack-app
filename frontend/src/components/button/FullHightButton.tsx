import {Button} from "@/components";

export const FullHightButton = ({children, onClick}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}) => {
  return <Button onClick={onClick} className="min-h-full h-full">
    {children}
  </Button>
}