import { useState } from "react";
import { Sidebar } from "./Sidebar";

type importNavbar = {
  pageNumber: number;
};

export function Navbar({pageNumber}:importNavbar) {
  const [sideMenuShow, setSideMenuShow] = useState<boolean>(false);

  return (
    <>
      <nav className="navbar bg-primary w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => {
                setSideMenuShow(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="navbar-center">
          <h1 className="text-white text-2xl">Inventory</h1>
        </div>
        <div className="navbar-end"></div>
      </nav>
      <Sidebar sideMenuShow={sideMenuShow} setSideMenuShow={setSideMenuShow}  pageNumber={pageNumber}/>
    </>
  );
}
