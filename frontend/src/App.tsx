import { Search } from "./components/search/Search";
import { Navbar } from "./components/navbar/Navbar";
import { Select } from "./components/select/Select";
import { Print } from "./components/print/Print";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar></Navbar>
      <main className="p-2 h-full w-full">
        <section className="h-10 grid grid-flow-col grid-cols-3 gap-2">
          <Search></Search>
          <Select></Select>
          <Print></Print>
        </section>
      </main>
    </div>
  );
}

export default App;
