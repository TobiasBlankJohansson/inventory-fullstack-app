import { Search } from "./components/search/Search";
import { Navbar } from "./components/navbar/Navbar";
import { Select } from "./components/select/Select";

function App() {
  return (
    <div className="h-screen">
      <Navbar></Navbar>
      <Search></Search>
      <Select></Select>
    </div>
  );
}

export default App;
