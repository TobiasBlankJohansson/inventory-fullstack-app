import { Button } from "@/components/button";
import { Navigation } from "../Navigation";

type importSidebar = {
  setSideMenuShow: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: number;
};

export function Sidebar({ setSideMenuShow, currentPage }: importSidebar) {
  return (
    <div className="z-10">
      <menu className="absolute top-0 w-4/6 h-screen bg-primary p-4">
        <h2 className="text-white font-medium text-2xl mb-5">Toobia Nordic</h2>
        <ol className="text-2xl p-2">
          {Navigation(currentPage)}
          <li className="text-white mb-4"></li>
        </ol>
      </menu>
      <Button
        className="btn-ghost absolute top-0 right-0 w-2/6 h-screen"
        onClick={() => {
          setSideMenuShow(false);
        }}
      >
      </Button>
    </div>
  );
}
