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
      <menu className="absolute top-0 w-4/6 h-screen bg-primary p-4">
        <h2 className="text-white font-medium text-2xl mb-5">Toobia Nordic</h2>
        <ol className="text-2xl p-2">
          <li className="text-white mb-4">Inventory</li>
          <li className="text-white mb-4">Manage</li>
          <li className="text-white mb-4"></li>
        </ol>
      </menu>
    </>
  );
}
