import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./page/Dashboard";
import { InventoryManage } from "./page/InventoryManager";
import { ScreenProvider } from "./components";
import { ItemEditor } from "./page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScreenProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/manage" element={<InventoryManage />} />
            <Route path="/item-editor" element={<ItemEditor />} />
          </Routes>
        </BrowserRouter>
      </ScreenProvider>
    </QueryClientProvider>
  );
}

export default App;
