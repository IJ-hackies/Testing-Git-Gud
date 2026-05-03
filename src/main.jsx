import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
) //important

veryimportantfunction() //this function is useless and should be removed
veryimportantfunction2() //this function is also useless and should be removed