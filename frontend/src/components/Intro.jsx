import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Star from './Star'

const generateFragments = () => {
  const frags = []
  const cols = 10
  const rows = 6
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      frags.push({
        id: `${x}-${y}`,
        x: (x / cols) * 100,
        y: (y / rows) * 100,
        delay: Math.random() * 1.2,
        size: 0.6 + Math.random() * 0.8,
      })
    }
  }
  return frags
}

const fragments = generateFragments()

const Intro = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => onComplete(), 2000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
      {fragments.map((frag) => (
        <motion.div
          key={frag.id}
          className="absolute"
          style={{
            left: `${frag.x}%`,
            top: `${frag.y}%`,
            width: `${12 * frag.size}%`,
            height: `${14 * frag.size}%`,
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ 
            opacity: 0,
            scale: 0.5,
          }}
          transition={{
            duration: 0.4,
            delay: frag.delay,
            ease: 'easeOut',
          }}
        >
          <Star className="w-full h-full text-pink" />
        </motion.div>
      ))}
    </div>
  )
}

export default Intro
