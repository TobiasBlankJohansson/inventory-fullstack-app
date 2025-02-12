import { navigation } from "./pages";

type importSidebar = {
  sideMenuShow: boolean;
  setSideMenuShow: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: number;
};

export function Sidebar({
  sideMenuShow,
  setSideMenuShow,
  currentPage,
}: importSidebar) {
  return (
    <>
      {sideMenuShow && (
        <div className="z-10">
          <menu className="absolute top-0 w-4/6 h-screen bg-primary p-4">
            <h2 className="text-white font-medium text-2xl mb-5">
              Toobia Nordic
            </h2>
            <ol className="text-2xl p-2">
              {navigation(currentPage)}
              <li className="text-white mb-4"></li>
            </ol>
          </menu>
          <button
            className="absolute top-0 right-0 w-2/6 h-screen"
            onClick={() => {
              setSideMenuShow(false);
            }}
          ></button>
        </div>
      )}
    </>
  );
}
