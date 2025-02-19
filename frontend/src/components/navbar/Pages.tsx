import { NavItem } from "./NavItem";

export function navigation(currentPage: number): JSX.Element[] {
  return [
    NavItem("Inventory", "/", 0, currentPage),
    NavItem("Manage", "/manage", 1, currentPage),
    NavItem("Custom list", "/", 1, currentPage),
  ];
}