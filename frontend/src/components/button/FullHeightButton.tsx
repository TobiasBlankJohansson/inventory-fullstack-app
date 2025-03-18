import {Button} from "@/components";

export const FullHeightButton = ({children, onClick}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}) => {
  return <Button onClick={onClick} className="min-h-full h-full">
    {children}
  </Button>
}