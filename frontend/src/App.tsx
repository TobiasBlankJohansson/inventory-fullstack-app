import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./page/Dashboard";
import { Manage } from "./page/Manage";
import { ScreenProvider } from "./components";

function App() {
  return (
    <ScreenProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manage" element={<Manage />} />
        </Routes>
      </BrowserRouter>
    </ScreenProvider>
  );
}

export default App;
