import { Link } from "react-router-dom";

export function navigation(currentPage: number): JSX.Element[] {
  return [
    NavItem("Inventory", "/", 0, currentPage),
    NavItem("Manage", "/manage", 1, currentPage),
  ];
}

function NavItem(
  label: string,
  link: string,
  page: number,
  currentPage: number
): JSX.Element {
  return (
    <li
      className={
        "mb-4 " + (currentPage === page ? "text-secondary" : "text-white")
      }
    >
      <Link to={link}>{label}</Link>
    </li>
  );
}
