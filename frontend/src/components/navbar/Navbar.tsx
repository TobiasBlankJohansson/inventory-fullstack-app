import { useScreen } from "../provider/ScreenContext";
import { Laptop } from "./laptop/Laptop";
import { Phone } from "./phone/Phone";

type importNavbar = {
  currentPage?: number;
  currentPageName: string;
};

export function Navbar({ currentPage = -1, currentPageName }: importNavbar) {
  const { isLaptop } = useScreen();
  return isLaptop ? Laptop(currentPage) : Phone(currentPageName, currentPage);
}
