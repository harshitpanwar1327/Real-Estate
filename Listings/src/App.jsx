import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import PropertyListing from './pages/PropertyListing'
import PropertyDetail from './pages/PropertyDetail'

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path='/' element={<PropertyListing />}/>
        <Route path='/propertyListing' element={<PropertyListing />}/>
        <Route path='/propertyDetail' element={<PropertyDetail />}/>
        
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </>
  )
}

export default App