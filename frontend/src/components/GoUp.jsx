import arrowright from '../assets/arrowright.png'
import { motion } from 'framer-motion'

const GoUp = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <motion.button 
            onClick={scrollToTop}
            className="flex flex-col items-center justify-center gap-2 mb-8 mt-16 mx-auto cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <img 
                src={arrowright} 
                alt="" 
                className="w-12 lg:w-16 h-auto -rotate-90"
            />
            <p className="font-['Teko'] text-xl lg:text-2xl text-black group-hover:text-pink transition-colors">
                Nach Oben
            </p>
        </motion.button>
    )
}

export default GoUp
