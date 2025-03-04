import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Button } from "../../button";

export function Phone(currentPageName: string, currentPage: number) {
  const [sideMenuShow, setSideMenuShow] = useState<boolean>(false);
  return (
    <>
      <nav className="navbar bg-primary w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <Button
              className="btn-ghost btn-circle"
              onClick={() => {
                setSideMenuShow(true);
              }}
              variant="primary"
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
            </Button>
          </div>
        </div>
        <div className="navbar-center">
          <h1 className="text-white text-2xl">{currentPageName}</h1>
        </div>
        <div className="navbar-end"></div>
      </nav>
      <Sidebar
        sideMenuShow={sideMenuShow}
        setSideMenuShow={setSideMenuShow}
        currentPage={currentPage}
      />
    </>
  );
}
