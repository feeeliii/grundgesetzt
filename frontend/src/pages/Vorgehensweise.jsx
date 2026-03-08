import { motion } from 'motion/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Star from '../components/Star'
import GoUp from '../components/GoUp'
import NewsletterSection from '../components/NewsletterSection'

const Vorgehensweise = () => {
    const sections = [
        {
            title: 'Wie wurde gegendert?',
            text: 'Wir haben uns für das Gendersternchen (*) entschieden – also z.B. „Bundeskanzler*in" statt „Bundeskanzler". Warum das Sternchen? Es ist das am weitesten verbreitete Zeichen für geschlechtergerechte Sprache und wird unter anderem vom Deutschen Rechtschreibrat diskutiert, von vielen Medien, Universitäten und Behörden bereits verwendet und schließt bewusst auch nicht-binäre Personen ein. Wo immer es möglich war, haben wir aber auf genderneutrale Begriffe zurückgegriffen.',
            starColor: 'text-pink',
            lineColor: 'text-pink'
        },
        {
            title: 'Wo gab es Schwierigkeiten?',
            text: 'Die größte Herausforderung waren Artikel mit vielen Amts- und Funktionsbezeichnungen (z.B. Bundespräsident). Das Ergebnis kann schnell unleserlich werden. Versuch doch mal, Art. 69 GG zu gendern! :-) Für diese Fälle gibt es leider kein Patentrezept – jeder Satz war eine Einzelfallentscheidung.',
            starColor: 'text-orange',
            lineColor: 'text-orange'
        },
        {
            title: 'Welche Strategien haben dabei geholfen?',
            text: 'Wenn ein Satz sehr schlecht lesbar war, habe ich verschiedene Techniken angewendet: Sätze umstellen, Kasus ändern, im Notfall auch Sätze trennen. Mein Ziel war es jedoch immer, möglichst nah am Original zu bleiben und die Sprache zu erhalten.  ',
            starColor: 'text-blue',
            lineColor: 'text-blue'
        },
        {
            title: 'Ist das Ergebnis perfekt?',
            text: (
                <>
                    Nein – und das liegt in der Natur der Sache. Wie inklusive Sprache aussehen kann, ist ein ständiger Diskurs. Es gibt nicht den einen richtigen Weg. Für fast jeden Satz, der verändert wurde, gab es mehrere Möglichkeiten – und oft keine eindeutig beste. Auch ich bin das Grundgesetz mehrfach durchgegangen, habe Strategien verworfen und neu angefangen. Was beim ersten Mal gut aussah, hat beim zweiten Lesen nicht mehr funktioniert. Das Ergebnis ist in diesem Sinne ein <span className="italic">Vorschlag</span>, wie ein inklusives Grundgesetz aussehen könnte.
                </>
            ),
            starColor: 'text-green',
            lineColor: 'text-green'
        },
        {
            title: 'Kann das nicht ChatGPT übernehmen?',
            text: 'Theoretisch ja – praktisch naja. KI-Tools wie ChatGPT können zwar mechanisch Gendersternchen einfügen, aber sie scheitern (jedenfalls ohne Training) regelmäßig an den Feinheiten. Sie erkennen nicht, wann ein Possessivpronomen grammatisch bricht, wann ein Satz umgestellt werden muss oder wann eine neutrale Formulierung besser passt als ein Sternchen. Besonders bei juristischen Texten, wo der genaue Wortlaut oft ausschlaggebend ist, braucht es Sprachgefühl und juristische Kenntnis. Jede Stelle wurde deshalb einzeln geprüft und von Hand überarbeitet mit Blick auf Grammatik, Lesbarkeit und rechtliche Präzision.',
            starColor: 'text-pink',
            lineColor: 'text-pink'
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
                        Vorgehensweise
                    </motion.h1>

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
                                <div className="flex flex-col items-center mr-6 relative">
                                    <Star className={`w-10 h-10 ${section.starColor} shrink-0 relative z-10`} />
                                    
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

                                <div className="flex-1 pb-16">
                                    <h2 className="font-['Teko'] text-2xl md:text-3xl text-black mb-3">
                                        {section.title}
                                    </h2>
                                    <div className="text-black/80 leading-relaxed">
                                        {section.text}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <NewsletterSection />
            <GoUp className="mt-8" />
            <Footer />
        </div>
    )
}

export default Vorgehensweise
