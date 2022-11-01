import { Navigate, Outlet} from "react-router-dom";

const PrivateEmpRoute = () => {
    const isLoggedIn = sessionStorage.getItem('role')?.toUpperCase()==="EMP";
    return isLoggedIn ? <Outlet /> : <Navigate to='/PMT-X/login' />
}

export default PrivateEmpRoute