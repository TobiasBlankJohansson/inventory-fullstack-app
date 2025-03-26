import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Asset, Dashboard, InventoryManage} from "@/page";
import {ScreenProvider} from "./components";
import {ItemEditor} from "./page";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Bounce, ToastContainer} from "react-toastify";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScreenProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/manage" element={<InventoryManage/>}/>
            <Route path="/item-editor" element={<ItemEditor/>}/>
            <Route path="/asset" element={<Asset/>}/>
          </Routes>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </BrowserRouter>
      </ScreenProvider>
    </QueryClientProvider>
  );
}

export default App;
