import { Navigate, Outlet} from "react-router-dom";

const PrivateManagerRoute = () => {
    const isLoggedIn = sessionStorage.getItem('role')==="MANAGER";
    return isLoggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateManagerRoute