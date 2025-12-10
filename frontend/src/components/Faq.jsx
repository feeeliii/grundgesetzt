import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import arrowdown from '../assets/arrowdown.png'

const faqs = [
    {
        question: 'Was ist das Grundgesetz für alle?',
        answer: 'Das Grundgesetz für alle ist ein Projekt, das sich für eine gendergerechte Sprache im deutschen Grundgesetz einsetzt.'
    },
    {
        question: 'Warum ist gendergerechte Sprache wichtig?',
        answer: 'Sprache prägt unser Denken und Handeln. Gendergerechte Sprache macht alle Menschen sichtbar und fördert Gleichberechtigung.'
    },
    {
        question: 'Aber ist juristische Sprache nicht neutral?',
        answer: 'Kurz: Nein. Der klassische rechtspositivistische Gedanke geht so: Das Recht steht im Gesetz, der Richter wendet es an, fertig. Objektivität bedeutet hier: keine persönlichen Wertungen, keine Politik, nur Subsumtion. Das Recht erscheint als etwas, das einfach da ist neutral, technisch, über den Dingen stehend. Das Problem: Diese Vorstellung verschleiert, dass Recht immer gemacht wird von Menschen, in einer bestimmten historischen Situation, mit einer bestimmten Sprache. Das Grundgesetz von 1949 wurde von 61 Männern und 4 Frauen geschrieben. Die Sprache, die sie wählten, war nicht "neutral", sondern spiegelte ihre Perspektive. Das generische Maskulinum ist ein Beispiel für eingeschriebene Machtverhältnisse – nicht weil jemand böswillig war, sondern weil Sprache historisch gewachsene Strukturen transportiert. Geschlechtergerechte Sprache reflektiert das. Sie sagt nicht: Das Recht war bisher falsch. Sie sagt: Wir können es besser machen, weil wir die Machtdimension von Sprache verstanden haben. Wenn Recht als kommunikativer Prozess verstanden wird, dann ist die Frage, wer in dieser Kommunikation vorkommt, eine demokratische Frage. Eine Verfassung, die alle anspricht, stärkt das Gefühl, Teil des politischen Gemeinwesens zu sein.'


    },
    {
        question: 'Wer steht hinter dem Projekt?',
        answer: 'Wir sind Feli und Josy, zwei Freundinnen aus Berlin. Josy ist Designerin und für unsere wunderschönen Bookcovers zuständig. Feli hat Jura studiert und das Grundgesetz umgeschrieben.'
    },
    {
        question: 'Wo kann ich das Buch kaufen?',
        answer: 'Wir arbeiten mit keinem Verlag zusammen. Stattdessen haben wir einen Self-publishing Service benutzt. Das ist für ein kleines Projekt wie dieses das sehr unkompliziert und kostengünstig. Das Buch kannst du auf verschiedenen Plattformen kaufen, die mit dem Self-publishing Service kooperieren. Eine Auswahl findest du oben unter "Buch kaufen".'
    },
    {
        question: 'Plant ihr, noch weitere Rechtstexte umzuschreiben?',
        answer: 'Unbedingt.'
    },
    {
        question: 'Wie kann ich das Projekt unterstützen?',
        answer: 'Du kannst das Projekt unterstützen, indem du unseren Newsletter abonnierst, das Buch kaufst oder die Botschaft in deinem Umfeld teilst.'
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
                        <p className="pb-6 text-black/80">
                            {answer}
                        </p>
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
