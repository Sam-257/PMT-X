import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "antd/dist/antd.css";
import Header from "./components/Layout/Header";
import Employee from "./pages/Employee";
import Login from "./pages/Login";
import ManagerPage from "./pages/ManagerPage";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import PrivateEmpRoute from "./utils/PrivateRoutes/PrivateEmpRoute";
import PrivateManagerRoute from "./utils/PrivateRoutes/PrivateManagerRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Navigate to="login" />} />
            <Route path="login" element={<Login />} />
            <Route element={<Header />}>
            <Route element={<PrivateEmpRoute />}>
              <Route path="employee" element={<Employee />} />
              </Route>
              <Route element={<PrivateManagerRoute />}>
              <Route path="manager" element={<ManagerPage />} />
              </Route>
            </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
