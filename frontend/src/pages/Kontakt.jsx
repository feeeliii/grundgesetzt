import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoUp from '../components/GoUp'

const Kontakt = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            
            <main className="py-24 px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h1
                        className="font-['Teko'] text-5xl md:text-6xl lg:text-7xl text-black mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Kontakt
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-black/80 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Du hast Anregungen, Ideen, oder möchstest einfach über das Projekt quatschen? Schreibt uns gerne auf{' '}
                        <a 
                            href="mailto:hallo@grundgesetzt.de" 
                            className="text-pink underline hover:text-pink/80 transition-colors"
                        >
                            hallo@grundgesetzt.de
                        </a>
                    </motion.p>

                    <motion.p
                        className="text-lg md:text-xl text-black/80 leading-relaxed mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Feli & Josy
                    </motion.p>


                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Kontakt
