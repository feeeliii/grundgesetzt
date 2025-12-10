import { motion } from 'framer-motion'
import male from '../assets/male.png'
import everyone from '../assets/everyone.png'
import speech from '../assets/speech.png'

const cards = [
    {
        image: male,
        title: 'Rechtstexte sind männlich!',
        body: 'Der Minister, der Bundeskanzler, der Stellvertreter. In deutschen Rechtstexten wird ausschließlich die männliche Form verwendet.'
    },
    {
        image: everyone,
        title: 'Rechtstexte betreffen uns alle!',
        body: 'Recht regelt das Zusammenleben aller Menschen. Das Grundgesetz ist Quelle unserer gemeinsamen Werte und Normen.'
    },
    {
        image: speech,
        title: 'Sprache schafft Realität!',
        body: 'Sprache prägt unser Denken und Handeln. Geschlechtergerechte Sprache fördert Gleichberechtigung und Vielfalt.'
    }
]

const WhySection = ({ introComplete }) => {
    return (
        <section className="py-16 px-8">
            <motion.h2 
                className="font-['Teko'] text-4xl md:text-5xl lg:text-5xl text-center text-black mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={introComplete ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                Wieso brauchen wir ein genderneutrales Grundgesetz?
            </motion.h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                {cards.map((card, index) => (
                    <motion.div 
                        key={index} 
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="w-48 h-48 lg:w-56 lg:h-56 mb-4">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="font-['Teko'] text-2xl lg:text-3xl text-black mb-2 text-center">
                            {card.title}
                        </h3>
                        <p className="text-black/80 text-sm lg:text-base text-center">
                            {card.body}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default WhySection
