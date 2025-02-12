import { Link } from "react-router-dom";

export function navigation(pageNumber: number): JSX.Element[] {
  return [
    <li
      className={("mb-4 " + (pageNumber === 0 ? "text-secondary" : "text-white"))}
    >
      <Link to="/">Inventory</Link>
    </li>,
    <li
      className={"mb-4 " + (pageNumber === 1 ? "text-secondary" : "text-white")}
    >
      <Link to="/manage">Manage</Link>
    </li>,
  ];
}
