import './App.css'
import {Routes, Route, useLocation, Navigate} from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import Login from './pages/authenticationPages/Login.jsx'
import Properties from './pages/main/Properties'
import Projects from './pages/main/Projects.jsx'
import Enquiries from './pages/main/Enquiries.jsx'

function App() {
  const location = useLocation();
  const hideNavigationBar = ['/','/login'];

  let isAuthenticated = sessionStorage.getItem('isAuthenticated');

  return (
    <>
    {!hideNavigationBar.includes(location.pathname) && <NavigationBar/>}

    <Routes>
        {/* Authentication routes */}
        <Route path='/' element={isAuthenticated==='true'? <Navigate to={'/projects'}/>:<Login />}/>
        <Route path='/login' element={isAuthenticated==='true'? <Navigate to={'/projects'}/>:<Login />}/>

        {/* main pages routes */}
        <Route element={<ProtectedRoutes/>}>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/properties' element={<Properties />}/>
          <Route path='/enquiries' element={<Enquiries />}/>
        </Route>
      </Routes>
    
    </>
  )
}

export default App