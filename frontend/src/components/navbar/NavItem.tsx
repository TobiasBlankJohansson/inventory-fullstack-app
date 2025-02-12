import { Link } from "react-router-dom";

export function NavItem(
  label: string,
  link: string,
  page: number,
  currentPage: number
): JSX.Element {
  return (
    <li
      className={"" + (currentPage === page ? "text-secondary underline" : "text-white")}
    >
      <Link to={link}>{label}</Link>
    </li>
  );
}
