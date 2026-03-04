import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Kontakt from './pages/Kontakt.jsx'
import Projekt from './pages/Projekt.jsx'
import ImpressumPage from './pages/ImpressumPage.jsx'
import Danke from './pages/Danke.jsx'
import Vorgehensweise from './pages/Vorgehensweise.jsx'
import Datenschutz from './pages/Datenschutz.jsx'

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/projekt" element={<Projekt />} />
                <Route path="/impressum" element={<ImpressumPage/>} />
                <Route path="/danke" element={<Danke />} />
                <Route path="/vorgehensweise" element={<Vorgehensweise />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
