import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const StatsSection = () => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            const target = 253
            const duration = 3000 // 3 Sekunden
            const steps = 60
            const increment = target / steps
            const stepTime = duration / steps

            let current = 0
            const timer = setInterval(() => {
                current += increment
                if (current >= target) {
                    setCount(target)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(current))
                }
            }, stepTime)

            return () => clearInterval(timer)
        }
    }, [isInView])

    return (
        <section ref={ref} className="bg-pink py-20 px-8 mb-12">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="font-['Teko'] text-8xl lg:text-9xl text-white font-bold">
                        {count}
                    </p>
                    <p className="font-['Teko'] text-3xl lg:text-4xl text-white mt-4">
                        Stellen haben wir verändert
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default StatsSection
