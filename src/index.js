import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
import './styles/carousel.css'





ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Accomodation" element={<Accomodation />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)




