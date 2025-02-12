import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./page/Dashboard";
import { Manage } from "./page/Manage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
