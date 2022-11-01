import { Navigate, Outlet} from "react-router-dom";

const PrivateManagerRoute = () => {
    const isLoggedIn = sessionStorage.getItem('role')==="MANAGER";
    return isLoggedIn ? <Outlet /> : <Navigate to='/PMT-X/login' />
}

export default PrivateManagerRoute