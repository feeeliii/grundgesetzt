import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Intro from '../components/Intro.jsx'
import WhySection from '../components/WhySection.jsx'
import LearnMore from '../components/LearnMore.jsx'
import StatsSection from '../components/StatsSection.jsx'
import FAQSection from '../components/Faq.jsx'
import PollSection from '../components/PollSection.jsx'
import NewsletterSection from '../components/NewsletterSection.jsx'
import Footer from '../components/Footer.jsx'
import GoUp from '../components/GoUp.jsx'

const Home = () => {
    const [showIntro, setShowIntro] = useState(false)
    const [introComplete, setIntroComplete] = useState(true)

    useEffect(() => {
        const hasSeenIntro = sessionStorage.getItem('hasSeenIntro')
        if (!hasSeenIntro) {
            setShowIntro(true)
            setIntroComplete(false)
        }
    }, [])

    const handleIntroComplete = () => {
        sessionStorage.setItem('hasSeenIntro', 'true')
        setIntroComplete(true)
        setShowIntro(false)
    }

    return (
        <div className="min-h-screen bg-white">
            {showIntro && <Intro onComplete={handleIntroComplete} />}
            
            <Navbar />
            <Hero />
            <WhySection introComplete={introComplete} />
            <LearnMore topic="das blablabla" introComplete={introComplete}/>
            <StatsSection />
            <LearnMore topic="unsere Vorgehensweise" useScrollAnimation />
            <PollSection />
            <NewsletterSection />
            <FAQSection />
            <GoUp />
            <Footer />
        </div>
    )
}

export default Home
