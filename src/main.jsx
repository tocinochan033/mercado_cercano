import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './HomePage.jsx'
import RegisterPageCompany from './RegisterPageCompany.jsx'
import LoginPage from './LoginPage.jsx'
import RegisterPageUser from './RegisterPageUser.jsx'
import FeedUI from './FeedUI.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegisterPageCompany/>
  </StrictMode>,
)
