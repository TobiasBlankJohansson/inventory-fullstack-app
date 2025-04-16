import {Navigation} from "@/components";

export function Laptop(currentPage: number) {
  return (
    <>
      <nav className="navbar bg-primary w-full px-5">
        <div className="navbar-start">
          <h1 className="text-white text-3xl ml-2">Toobia Nordic</h1>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <ol className="flex justify-between w-full text-xl mr-4">
            {Navigation(currentPage)}
          </ol>
        </div>
      </nav>
    </>
  );
}
