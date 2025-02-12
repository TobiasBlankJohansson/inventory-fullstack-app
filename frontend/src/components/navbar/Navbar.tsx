import { useScreen } from "../provider/ScreenContext";
import { Laptop } from "./Laptop";
import { Phone } from "./Phone";

type importNavbar = {
  currentPage: number;
  currentPageName: string;
};

export function Navbar({ currentPage, currentPageName }: importNavbar) {
  const { isLaptop } = useScreen();
  return isLaptop ? Laptop(currentPage) : Phone(currentPageName, currentPage);
}
