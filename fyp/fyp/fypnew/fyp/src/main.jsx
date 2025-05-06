import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NAVBAR from './component/layout/NAVBAR'
import FOOTER from './component/layout/FOOTER'
import App from './App.jsx'
//import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <NAVBAR/>
    <App/>
    <FOOTER/>
  </StrictMode>,
)

