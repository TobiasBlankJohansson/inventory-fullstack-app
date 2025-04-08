import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AssetEdit, AssetTable, Dashboard, InventoryManage} from "@/page";
import {ScreenProvider} from "./components";
import {ItemEditor} from "./page";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Bounce, ToastContainer} from "react-toastify";
import {useAuth0} from "@auth0/auth0-react";
import LoginPage from "@/page/LoginPage.tsx";
import {DefectReport} from "@/features";

const queryClient = new QueryClient();

function App() {
  const {
    isAuthenticated,
  } = useAuth0();
  console.log(isAuthenticated);
  return isAuthenticated ? (<QueryClientProvider client={queryClient}>
    <ScreenProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/manage" element={<InventoryManage/>}/>
          <Route path="/item-editor" element={<ItemEditor/>}/>
          <Route path="/asset" element={<AssetEdit/>}/>
          <Route path="/table" element={<AssetTable/>}/>
          <Route path="/defect" element={<DefectReport/>}/>
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
  </QueryClientProvider>) : <LoginPage></LoginPage>
}

export default App;
