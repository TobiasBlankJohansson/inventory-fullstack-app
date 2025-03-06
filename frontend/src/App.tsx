import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./page/Dashboard";
import { InventoryManage } from "./page/InventoryManager";
import { ScreenProvider } from "./components";
import { ItemEditor } from "./page";

function App() {
  return (
    <ScreenProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manage" element={<InventoryManage />} />
          <Route path="/item-editor" element={<ItemEditor />} />
        </Routes>
      </BrowserRouter>
    </ScreenProvider>
  );
}

export default App;
