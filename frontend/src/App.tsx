import { Search } from "./components/search/Search";
import { Navbar } from "./components/navbar/Navbar";
import { Select } from "./components/select/Select";
import { Print } from "./components/print/Print";

function App() {
  return (
    <div className="h-screen">
      <Navbar></Navbar>
      <Search></Search>
      <Select></Select>
      <Print></Print>
    </div>
  );
}

export default App;
