import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import buch_mockup from '../assets/buch_mockup.webp'

const shops = [
    {
        name: 'epubli',
        url: 'https://www.epubli.com/shop/das-grundgesetz-fuer-die-bundesrepublik-deutschland-9783565307647'
    },
    {
        name: 'Amazon',
        url: 'https://www.amazon.de/-/en/Felicitas-Strickmann/dp/3565307641/ref=sr_1_1?crid=YPFQ532OPOH2&dib=eyJ2IjoiMSJ9.4F87i2K8T3-dd4loKvj8jtnhPpwtHCPfFFtgZ94ywF6PwaJ6QbjpvnwV0hmhFGJRkfIUQKy-BoC6ZSucUl78CnfklHJlEQImpjh_9Nn_Kc4.sKKWDqe7lGhFYNJGHJb6jZAwv24EL7U9yZ7PXv2qm2Q&dib_tag=se&keywords=felicitas+strickmann&qid=1774267045&sprefix=felicitas+strickmann%2Caps%2C102&sr=8-1'  // ← deine URL eintragen
    },
    {
        name: 'Thalia',
        url: 'https://www.thalia.de/shop/home/artikeldetails/A1078534945'
    }
]

const BuyButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef(null)

    // Schließt Dropdown wenn außerhalb geklickt wird
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div ref={ref} className="relative inline-block">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-pink text-white px-8 py-4 text-lg font-semibold hover:bg-pink/85 transition cursor-pointer flex items-center gap-3"
            >
                Buch kaufen – 12,99 €
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm"
                >
                    ▼
                </motion.span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 z-50 flex flex-col border border-pink/20 shadow-md"
                    >
                        {shops.map((shop) => (
                            <a
                                key={shop.name}
                                href={shop.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-pink hover:text-white transition border-b border-pink/10 last:border-b-0"
                            >
                                {shop.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

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
          <BuyButton />
        </div>
      </div>

      {/* Image */}
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

      {/* Button - nur Mobile/Tablet */}
      <div className="flex lg:hidden justify-center px-8 py-8">
        <BuyButton />
      </div>
    </section>
  )
}

export default Hero
