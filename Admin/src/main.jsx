import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import {Zoom} from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
        transition={Zoom}
      />
    </Router>
  </StrictMode>,
)