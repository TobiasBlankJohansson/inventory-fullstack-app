export function Navbar() {
  return (
    <>
      <nav className="navbar bg-primary">
        <div className="navbar-start">
          <div className="dropdown">
            <button className="btn btn-ghost btn-circle" onClick={() => {}}>
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
      <menu className="h-fit bg-primary w-1/2">
        <ol className="text-2xl p-2">
          <li className="text-white">Inventory</li>
          <li className="text-white">Manage</li>
          <li className="text-white"></li>
        </ol>
        <h2 className="text-white">Toobia Nordic</h2>
      </menu>
    </>
  );
}
