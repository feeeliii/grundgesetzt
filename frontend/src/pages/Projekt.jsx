import { motion } from 'motion/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Star from '../components/Star'
import GoUp from '../components/GoUp'
import NewsletterSection from '../components/NewsletterSection'

const Projekt = () => {
    const sections = [
        {
            title: 'Worum geht es bei dem Projekt?',
            text: 'Mit "grundgesetzt" soll gezeigt werden, wie das Grundgesetz aussehen könnte, wenn es alle Menschen auch sprachlich einschließt.',            starColor: 'text-pink',
            lineColor: 'text-pink'
        },
        {
            title: 'Wieso der Name "grundgesetzt"?',
            text: '"Grundgesetzt" verbindet das Grundgesetz mit dem Wort "setzen" – im Sinne von neu setzen, neu etablieren. Denn genau darum geht es: Wir nehmen das Fundament unserer Verfassung und setzen es sprachlich neu. Das Grundgesetz verspricht Gleichheit für alle – mit "grundgesetzt" machen wir diese Gleichheit auch in der Sprache sichtbar.',            starColor: 'text-orange',
            lineColor: 'text-orange'
        },
        {
            title: 'Was ist "gendergerechte Sprache"?',
            text: 'Gendergerechte Sprache ist eine Form der Sprache, die alle Geschlechter sichtbar macht. Im Deutschen wird das generische Maskulinum verwendet, um alle Menschen zu bezeichnen (z.B. "der Bürger" für alle Menschen). Gendergerechte Sprache verwendet stattdessen Formen, die alle Geschlechter einschließen, z.B. "die Bürger*innen" oder "die Bürger:innen". In unserem Buch haben wir uns für das sogenannte Gendersternchen entschieden. Wo möglich, haben wir auf genderneutrale Begriffe zurückgegriffen. Wenn du mehr darüber erfahren möchtest, schau doch mal bei Vorgehensweise vorbei.',            starColor: 'text-blue',
            lineColor: 'text-blue'
        },
        {
            title: 'Was plant ihr für die Zukunft?',
            text: 'Gute Frage! Das Projekt "grundgesetzt" ist als Startpunkt gedacht. Es soll zeigen, wie Rechtstexte in geschlechtergerechter Sprache aussehen können. In Zukunft wollen wir weitere Rechtstexte umschreiben. Welche das sein werden, können wir gemeinsam entscheiden. Stimm gerne oben ab oder schick mir deinen Vorschlag. :)',            starColor: 'text-green',
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
