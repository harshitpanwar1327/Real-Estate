import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

    let isAuthenticated = sessionStorage.getItem('isAuthenticated');

  return isAuthenticated==='true'? <Outlet /> : <Navigate to={'/login'}/>
}

export default ProtectedRoutes