import arrowright from '../assets/arrowright.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const LearnMore = ({ topic, introComplete, useScrollAnimation = false, link }) => {
    const content = (
        <motion.div 
            className="flex items-center justify-center gap-2 mb-12 cursor-pointer hover:opacity-80 transition-opacity"
            initial={{ opacity: 0, y: 20 }}
            animate={!useScrollAnimation && introComplete ? { opacity: 1, y: 0 } : undefined}
            whileInView={useScrollAnimation ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: useScrollAnimation ? 0 : 0.8 }}
            viewport={{ once: true }}
        >
            <img 
                src={arrowright} 
                alt="" 
                className="w-12 lg:w-16 h-auto"
            />
            <p className="font-['Teko'] text-xl lg:text-2xl">
                Erfahre mehr über <span className="text-pink underline">{topic}</span>
            </p>
        </motion.div>
    )

    return link ? <Link to={link}>{content}</Link> : content
}

export default LearnMore
