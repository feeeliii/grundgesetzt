import { motion } from 'motion/react'
import buch_mockup from '../assets/buch_mockup.webp'

const Hero = ({ introComplete }) => {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center lg:gap-12 lg:px-8 lg:py-16">
      {/* Left Content */}
      <div className="flex-1 px-8 py-12 lg:p-0 text-center lg:text-left">
        <h1 className="font-bold text-black leading-none text-[64px] md:text-[72px] lg:text-[96px]">
          Das Grundgesetz
        </h1>
        <h3 className="font-semibold text-pink leading-none text-[32px] md:text-[40px] lg:text-[48px]">
          *in genderneutraler Sprache
        </h3>
        <p className="mt-6 text-black/70 text-xl">
          Der Bundeskanzler, der Bundespräsident, der Beamte, der Richter. Das Grundgesetz, also die Verfassung der Bundesrepublik Deutschland, ist männlich. Das wollen wir ändern. In diesem Buch findest du alle 146 Artikel des Grundgesetzes in genderneutraler Sprache.
        </p>
        <div className="hidden lg:flex mt-8">
          <a 
            href="https://www.epubli.com/shop/das-grundgesetz-der-bundesrepublik-deutschland-9783565280285"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink text-white px-8 py-4 text-lg font-semibold hover:bg-pink/85 transition cursor-pointer"
          >
            Buch kaufen – 12,99 €
          </a>
        </div>
      </div>

      {/* Image - slides in from right after intro */}
      <motion.div
        className="flex-1 w-full lg:flex lg:justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ 
          opacity: introComplete ? 1 : 0, 
          x: introComplete ? 0 : 100 
        }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      >
        <img src={buch_mockup} alt="Buch Mockup" className="w-3/4 mx-auto" />
      </motion.div>

      {/* Button - only on mobile/tablet */}
      <div className="flex lg:hidden justify-center px-8 py-8">
        <button className="bg-pink text-white px-8 py-4 text-lg font-semibold hover:bg-pink/85 transition cursor-pointer">
          Buch kaufen – 12 €
        </button>
      </div>
    </section>
  )
}

export default Hero
