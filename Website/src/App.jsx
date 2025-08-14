import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavigationBar from './components/NavigationBar.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import PropertyListing from './pages/PropertyListing.jsx'
import PropertyDetail from './pages/PropertyDetail.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Footer from './components/Footer.jsx'
import ChatSpeedDial from './components/ChatSpeedDial.jsx'

function App() {
  return (
    <>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/projects/:id' element={<Projects />}/>
        <Route path='/property-listing/:id' element={<PropertyListing />}/>
        <Route path='/property-detail/:id' element={<PropertyDetail />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
      <ChatSpeedDial />
      <Footer/>
    </>
  )
}

export default App