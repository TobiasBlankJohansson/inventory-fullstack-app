import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ScreenProvider} from "./components";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Bounce, ToastContainer} from "react-toastify";
import {useAuth0} from "@auth0/auth0-react";
import LoginPage from "@/page/LoginPage.tsx";
import {AssetEditPage, AssetTablePage, Dashboard, DefectReport, InventoryManage, ItemEdit} from "@/features";
import {CreateCustomList} from "@/features/custom-list/create-custom-list.tsx";

const queryClient = new QueryClient();

function App() {
  const {
    isAuthenticated,
  } = useAuth0();
  return isAuthenticated ? (<QueryClientProvider client={queryClient}>
    <ScreenProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/manage" element={<InventoryManage/>}/>
          <Route path="/item-editor" element={<ItemEdit/>}/>
          <Route path="/asset" element={<AssetEditPage/>}/>
          <Route path="/table" element={<AssetTablePage/>}/>
          <Route path="/defect" element={<DefectReport/>}/>
          <Route path="/custom-list" element={<CreateCustomList/>}/>
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
