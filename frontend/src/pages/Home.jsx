import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import buchMockup from '../assets/buch_mockup.webp'
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
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro')
    const [showIntro, setShowIntro] = useState(!hasSeenIntro)
    const [introComplete, setIntroComplete] = useState(!!hasSeenIntro)
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.src = buchMockup
        img.onload = () => setImageLoaded(true)
    }, [])

    const handleIntroComplete = () => {
        sessionStorage.setItem('hasSeenIntro', 'true')
        setIntroComplete(true)
        setShowIntro(false)
    }

    const readyToShow = introComplete || imageLoaded

    return (
        <div className="min-h-screen bg-white">
            {showIntro && <Intro onComplete={handleIntroComplete} />}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: readyToShow ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeIn' }}
            >
                <Navbar />
                <Hero introComplete={introComplete} />
                <WhySection introComplete={introComplete} />
                <LearnMore topic="das Projekt" introComplete={introComplete} link="/projekt"/>
                <StatsSection />
                <LearnMore topic="unsere Vorgehensweise" useScrollAnimation link="/vorgehensweise"/>
                <PollSection />
                <NewsletterSection />
                <FAQSection />
                <GoUp />
                <Footer />
            </motion.div>
        </div>
    )
}

export default Home
