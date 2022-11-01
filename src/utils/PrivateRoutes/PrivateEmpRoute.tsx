import { Navigate, Outlet} from "react-router-dom";

const PrivateEmpRoute = () => {
    const isLoggedIn = sessionStorage.getItem('role')?.toUpperCase()==="EMP";
    return isLoggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateEmpRoute