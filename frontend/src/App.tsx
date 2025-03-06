import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./page/Dashboard";
import { InventoryManage } from "./page/InventoryManager";
import { ScreenProvider } from "./components";

function App() {
  return (
    <ScreenProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manage" element={<InventoryManage />} />
        </Routes>
      </BrowserRouter>
    </ScreenProvider>
  );
}

export default App;
