import {Laptop, Phone, useScreen} from "@/components";

type importNavbar = {
  currentPage?: number;
  currentPageName: string;
};

export function Navbar({currentPage = -1, currentPageName}: importNavbar) {
  const {isLaptop} = useScreen();
  return isLaptop ? Laptop(currentPage) : Phone(currentPageName, currentPage);
}
