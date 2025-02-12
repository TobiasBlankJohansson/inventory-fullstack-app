import { Link } from "react-router-dom";

export const navigation: JSX.Element[] = [
  <li className="text-secondary mb-4">
    <Link to="/">Inventory</Link>
  </li>,
  <li className="text-white mb-4">
    <Link to="/manage">Manage</Link>
  </li>,
];
