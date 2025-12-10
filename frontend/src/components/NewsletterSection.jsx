import { useState } from 'react'
import { motion } from 'framer-motion'

const NewsletterSection = () => {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Platzhalter - später Keila Integration
        console.log('Newsletter signup:', email)
        setStatus('success')
        setEmail('')
    }

    return (
        <section className="bg-pink py-16 px-8">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    className="font-['Teko'] text-4xl md:text-5xl lg:text-6xl text-white mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Bleib auf dem Laufenden!
                </motion.h2>

                <motion.p
                    className="text-white/80 mb-8 text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    Melde dich für unseren Newsletter an und erfahre als Erstes von Neuigkeiten.
                </motion.p>

                <motion.form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Deine E-Mail-Adresse"
                        className="w-full sm:w-80 px-6 py-3 rounded-lg bg-transparent border-2 border-white text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3 bg-white text-pink font-['Teko'] text-xl hover:bg-white/90 transition-colors"
                    >
                        Anmelden
                    </button>
                </motion.form>

                {status === 'success' && (
                    <motion.p
                        className="mt-6 text-white text-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        ✓ Erfolgreich angemeldet!
                    </motion.p>
                )}
            </div>
        </section>
    )
}

export default NewsletterSection
