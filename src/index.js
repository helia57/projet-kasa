import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'

import './styles/Error.css'
import Apropos from './pages/Apropos'
import './styles/header.css'
import './styles/Accueil.css'
import './styles/cardPaysage.css'
import './styles/gallery.css'
import './styles/cardMontagne.css'
import './styles/footer.css'
import './styles/Collapse.css'





ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)




