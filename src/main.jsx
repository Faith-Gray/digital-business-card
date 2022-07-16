import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Info from './Info'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Info />
    <About />
    <Interests />
    <Footer />
  </React.StrictMode>
)
