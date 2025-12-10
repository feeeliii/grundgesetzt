import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Kontakt from './pages/Kontakt.jsx'
import Projekt from './pages/Projekt.jsx'
import ImpressumPage from './pages/ImpressumPage.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/projekt" element={<Projekt />} />
                <Route path="/impressum" element={<ImpressumPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
