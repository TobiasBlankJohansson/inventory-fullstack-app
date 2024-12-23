import { Search } from "./components/search/Search";
import { Navbar } from "./components/navbar/Navbar";
import { Select } from "./components/select/Select";
import { Print } from "./components/print/Print";
import { Tabel } from "./components/tabel/Tabel";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar></Navbar>
        <section className="h-10 grid grid-flow-col grid-cols-3 gap-2 m-2 mb-0">
          <Search></Search>
          <Select></Select>
          <Print></Print>
        </section>
      <Tabel></Tabel>
    </div>
  );
}

export default App;
