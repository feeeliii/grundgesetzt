import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Star from '../components/Star'
import GoUp from '../components/GoUp'
import NewsletterSection from '../components/NewsletterSection'

const Projekt = () => {
    const sections = [
        {
            title: 'Worum geht es bei dem Projekt?',
            text: 'Wir haben das Grundgesetz in geschlechtergerechte Sprache übersetzt. Denn obwohl unsere Verfassung Gleichheit für alle garantiert, verwendet sie fast ausschließlich männliche Formen. Mit "grundgesetzt" zeigen wir, wie ein Grundgesetz aussehen könnte, das alle Menschen auch sprachlich einschließt.',            starColor: 'text-pink',
            lineColor: 'text-pink'
        },
        {
            title: 'Wieso der Name "grundgesetzt"?',
            text: '"Grundgesetzt" verbindet das Grundgesetz mit dem Wort "setzen" – im Sinne von neu setzen, neu etablieren. Denn genau das tun wir: Wir nehmen das Fundament unserer Verfassung und setzen es sprachlich neu. Das Grundgesetz verspricht Gleichheit für alle – mit "grundgesetzt" machen wir diese Gleichheit auch in der Sprache sichtbar.',            starColor: 'text-orange',
            lineColor: 'text-orange'
        },
        {
            title: 'Wer steht hinter dem Projekt?',
            text: 'Wir sind Feli und Josy, zwei Freundinnen aus Berlin. Josy ist Designerin und für unsere wunderschönen Bookcovers zuständig. Feli hat Jura studiert und das Grundgesetz umgeschrieben.',
            starColor: 'text-blue',
            lineColor: 'text-blue'
        },
        {
            title: 'Was plant ihr für die Zukunft?',
            text: 'Das Grundgesetz war unser erster Schritt, aber nicht unser letzter. Wir möchten weitere Rechtstexte umschreiben und zugänglicher machen. Noch wichtiger ist uns aber der Dialog: Wie kann Sprache das Recht inklusiver gestalten? Wer fühlt sich angesprochen, wer nicht – und warum?',
            starColor: 'text-green',
            lineColor: 'text-green'
        }
    ]

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            
            <main className="py-24 px-8 flex-1">
                <div className="max-w-3xl mx-auto">
                    <motion.h1
                        className="font-['Teko'] text-5xl md:text-6xl lg:text-7xl text-black mb-16 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Das Projekt
                    </motion.h1>

                    {/* Sections */}
                    <div className="flex flex-col">
                        {sections.map((section, index) => (
                            <motion.div 
                                key={index}
                                className="flex"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Linke Spalte: Stern + Linie */}
                                <div className="flex flex-col items-center mr-6 relative">
                                    {/* Großer Stern */}
                                    <Star className={`w-10 h-10 ${section.starColor} shrink-0 relative z-10`} />
                                    
                                    {/* Sternenlinie nach unten - animiert */}
                                    {index < sections.length - 1 && (
                                        <motion.div 
                                            className="absolute top-8 bottom-0 left-1/2 -translate-x-1/2 overflow-hidden flex flex-col items-center origin-top"
                                            initial={{ scaleY: 0 }}
                                            whileInView={{ scaleY: 1 }}
                                            transition={{ duration: 0.8, delay: 0.3 }}
                                            viewport={{ once: true }}
                                        >
                                            {[...Array(500)].map((_, i) => (
                                                <Star key={i} className={`w-1 h-1 ${section.lineColor} shrink-0`} />
                                            ))}
                                        </motion.div>
                                    )}
                                </div>

                                {/* Rechte Spalte: Text Content */}
                                <div className="flex-1 pb-16">
                                    <h2 className="font-['Teko'] text-2xl md:text-3xl text-black mb-3">
                                        {section.title}
                                    </h2>
                                    <p className="text-black/80 leading-relaxed">
                                        {section.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            < NewsletterSection />
            <GoUp className="mt-8"/>
            <Footer />
        </div>
    )
}

export default Projekt
