import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import arrowdown from '../assets/arrowdown.png'

const faqs = [
    {
        question: 'Worum geht es bei dem Projekt?',
        answer: 'Wir haben das Grundgesetz, also die Verfassung der Bundesrepublik Deutschland, umgeschrieben, damit es auch sprachlich für alle da ist. In diesem Buch findest du alle 146 Artikel des Grundgesetzes in genderneutraler Sprache.'
    },
    {
        question: 'Warum ist gendergerechte Sprache wichtig?',
        answer: 'Sprache prägt unser Denken und Handeln. Gendergerechte Sprache macht alle Menschen sichtbar und fördert Gleichberechtigung.'
    },
    {
        question: 'Aber ist juristische Sprache nicht neutral?',
        answer: 'Sprache ist nie neutral: Sie übermittelt Einstellungen, Wertvorstellungen und Bedeutungen und verändert sich mit gesellschaftlichen Entwicklungen. Die Sprache des Rechts ist da keine Ausnahme. Das Grundgesetz spricht durchgehend vom Bundeskanzler, vom Bundespräsidenten, vom Beamten, vom Richter. Studien zeigen, dass Menschen bei generisch-maskulinen Begriffen überwiegend an Männer denken. „Mitgemeint" ist nicht dasselbe wie „sichtbar". Gesetze sind außerdem keine Naturgesetze: Sie sind menschengemacht, historisch gewachsen und werden ständig angepasst. Das Grundgesetz wurde 1948/49 von 61 Männern und nur vier Frauen erarbeitet. Dass es heute noch durchgehend männlich formuliert ist, ist eine Entscheidung – und keine Notwendigkeit. '

    },
    {
        question: 'Wer steht hinter dem Projekt?',
        answer: 'Hinter dem Projekt stehe ich, Feli. Hi! :) Ich habe Jura studiert und lebe in Berlin. Das Buch ist ein Herzensprojekt, das ich in meiner Freizeit umsetze.'
    },
    {
        question: 'Wo kann ich das Buch kaufen?',
        answer: ( <>        
        'Das Buch wird über den Self-Publishing-Dienstleister <a href="https://www.epubli.com/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">epubli</a> veröffentlicht und ist dadurch auf verschiedenen Buchplattformen erhältlich. Eine Auswahl findest du oben unter „Buch kaufen".'
        </>)
    },
        {
        question: 'Wie kommt der Preis zustande?',
        answer: 'Der Preis von 12,99 € setzt sich zusammen aus den Druckkosten des Buches (~8 € pro Exemplar), Vertriebskosten von epubli und der Mehrwertssteuer. Je nachdem, wo du das Buch kaufst, bleibt ein Autor*innenhonorar von 1-2 € pro verkauftem Exemplar übrig. Hiervon bezahle ich die laufenden Kosten des Projekts (z.B. das Hosting für die Website). Sollte mehr übrig bleiben, will ich das Geld nutzen, um das Buch Menschen oder Organisationen zur Verfügung zu stellen, die es sich nicht leisten können.'
    },
    {
        question: 'Wie kann ich das Projekt unterstützen?',
        answer: 'Du kannst das Projekt unterstützen, indem du den Newsletter abonnierst, das Buch kaufst oder das Projekt in deinem Umfeld teilst.'
    },
]

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-black/20">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left"
            >
                <span className="font-['Teko'] text-2xl lg:text-3xl text-black">
                    {question}
                </span>
                <motion.img
                    src={arrowdown}
                    alt=""
                    className="w-6 h-6 lg:w-8 lg:h-8"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-black/80">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const FAQSection = () => {
    return (
        <section className="py-16 px-8">
            <motion.h2
                className="font-['Teko'] text-4xl md:text-5xl lg:text-5xl text-center text-black mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Häufig gestellte Fragen
            </motion.h2>

            <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <FAQItem question={faq.question} answer={faq.answer} />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default FAQSection
