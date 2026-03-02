import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Star from '../components/Star'

const Danke = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <main className="py-24 px-8 flex-1">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center mb-8"
                    >
                        <Star className="w-16 h-16 text-pink" />
                    </motion.div>

                    <motion.h1
                        className="font-['Teko'] text-5xl md:text-6xl lg:text-7xl text-black mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Du bist dabei!
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-black/80 leading-relaxed mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Danke für deine Anmeldung. Wir halten dich auf dem Laufenden!
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Link
                            to="/"
                            className="bg-pink text-white px-8 py-4 text-lg font-semibold hover:bg-pink/85 transition cursor-pointer"
                        >
                            Zurück zur Startseite
                        </Link>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Danke
