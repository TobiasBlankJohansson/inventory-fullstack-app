import { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { navigation } from "./pages";

type importNavbar = {
  currentPage: number;
  currentPageName: string;
};

export function Navbar({ currentPage, currentPageName }: importNavbar) {
  const [sideMenuShow, setSideMenuShow] = useState<boolean>(false);
  const [isLaptop, setIsLaptop] = useState<boolean>(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsLaptop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const laptop = (
    <>
      <nav className="navbar bg-primary w-full px-5">
        <div className="navbar-start">
          <h1 className="text-white text-3xl ml-2">Toobia Nordic</h1>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <ol className="flex justify-between w-full text-xl">
            {navigation(currentPage)}
          </ol>
        </div>
      </nav>
    </>
  );
  const phone = (
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
  return isLaptop ? laptop : phone;
}
