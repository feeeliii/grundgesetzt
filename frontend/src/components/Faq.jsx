import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import arrowdown from '../assets/arrowdown.png'

const faqs = [
    {
        question: 'Was ist das Grundgesetz für alle?',
        answer: 'Das Grundgesetz für alle ist das Grundgesetz in genderneutraler Sprache.'
    },
    {
        question: 'Warum ist gendergerechte Sprache wichtig?',
        answer: 'Sprache prägt unser Denken und Handeln. Gendergerechte Sprache macht alle Menschen sichtbar und fördert Gleichberechtigung.'
    },
    {
        question: 'Aber ist juristische Sprache nicht neutral?',
        answer: 'Nein, juristische Sprache ist nicht neutral. Viele Menschen denken, dass Gesetze einfach geschrieben stehen und Richter sie dann anwenden. Objektivität bedeutet in dieser Vorstellung, dass keine persönlichen Meinungen einfließen, sondern nur sachlich gearbeitet wird. Das Recht wirkt dadurch neutral und technisch, wie etwas, das einfach so existiert. Diese Sichtweise übersieht aber etwas Wichtiges. Recht wird immer von Menschen gemacht, und zwar in einer bestimmten Zeit und mit einer bestimmten Perspektive. Das Grundgesetz von 1949 wurde zum Beispiel von 61 Männern und nur 4 Frauen geschrieben. Die Sprache, die sie verwendeten, war nicht neutral, sondern spiegelte ihre Sicht der Welt wider. Das generische Maskulinum ist ein gutes Beispiel dafür. Wenn wir "der Bürger" sagen und damit alle Menschen meinen, dann sind darin Machtverhältnisse eingebaut. Das geschah nicht aus böser Absicht, sondern weil Sprache historisch gewachsene Strukturen weiterträgt. Geschlechtergerechte Sprache macht genau das sichtbar. Sie behauptet nicht, dass alles bisher falsch war. Sie sagt vielmehr, dass wir es heute besser machen können, weil wir verstehen, dass Sprache nicht neutral ist. Wenn Recht ein Kommunikationsprozess ist, dann wird die Frage wichtig, wer in dieser Kommunikation vorkommt und wer angesprochen wird. Eine Verfassung, die alle Menschen direkt anspricht, stärkt das Gefühl, wirklich Teil der Gesellschaft zu sein. Das ist letztlich eine demokratische Frage.'


    },
    {
        question: 'Wer steht hinter dem Projekt?',
        answer: 'Wir sind Feli und Josy, zwei Freundinnen aus Berlin. Josy ist Designerin und für unsere wunderschönen Bookcovers zuständig. Feli hat Jura studiert und das Grundgesetz umgeschrieben.'
    },
    {
        question: 'Wo kann ich das Buch kaufen?',
        answer: 'Wir benutzen einen Self-publishing Service. Das ist für ein kleines Projekt wie dieses super, da es kein finanzielles Risiko für uns darstellt (z.B. weil wir nicht in Vorleistung gehen müssen). Das Buch kannst du auf verschiedenen Plattformen kaufen, die mit dem Self-publishing Service kooperieren. Eine Auswahl findest du oben unter "Buch kaufen".'
    },
    {
        question: 'Plant ihr, noch weitere Rechtstexte umzuschreiben?',
        answer: 'Unbedingt. :)'
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
