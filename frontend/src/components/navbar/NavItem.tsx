import { Link } from "react-router-dom";
import { useScreen } from "../provider/ScreenContext";

export function NavItem(
  label: string,
  link: string,
  page: number,
  currentPage: number
): JSX.Element {
  const { isLaptop } = useScreen();
  return (
    <li
      key={"navitem_" + page}
      className={
        (!isLaptop && "mb-4 ") +
        (currentPage === page ? " text-secondary underline" : " text-white")
      }
    >
      <Link to={link}>{label}</Link>
    </li>
  );
}
