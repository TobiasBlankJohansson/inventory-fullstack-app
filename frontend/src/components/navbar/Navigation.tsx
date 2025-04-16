import {NavItem} from "./NavItem";

export function Navigation(currentPage: number): JSX.Element[] {
  return [
    NavItem("Inventory", "/", 0, currentPage),
    NavItem("Manage", "/manage", 1, currentPage),
    NavItem("Custom list", "/custom-list", 2, currentPage),
    NavItem("Defect report", "/defect", 3, currentPage),
  ];
}
