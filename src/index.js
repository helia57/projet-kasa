import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import Apropos from './pages/Apropos'
import Accomodation from './pages/Accomodation'



import './styles/Error.css'
import './styles/header.css'
import './styles/Accueil.css'
import './styles/cardPaysage.css'
import './styles/gallery.css'
import './styles/cardMontagne.css'
import './styles/footer.css'
import './styles/collapse.css'
import './styles/slider.css'
import './styles/stars.css'
import './styles/tag.css'
import './styles/host.css'
import './styles/Accomodation.css'





ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Accomodation/:id" element={<Accomodation />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Error" element={<Error />} />
        <Route path="*" element={<Navigate to="/Error" replace />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)




