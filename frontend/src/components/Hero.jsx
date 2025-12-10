const Hero = () => {
    return (
      <section className="flex flex-col lg:flex-row lg:items-center lg:gap-12 lg:px-8 lg:py-16">
        {/* Left Content */}
        <div className="flex-1 px-8 py-12 lg:p-0 text-center lg:text-left">
          <h1 className="font-['Teko'] font-bold text-black leading-none text-[64px] md:text-[72px] lg:text-[96px]">
            Das Grundgesetz<br />für alle!
          </h1>
          
          <p className="mt-6 text-black/70 text-lg max-w-md mx-auto lg:mx-0">
            Wir haben das Grundgesetz umgeschrieben, damit es für alle da ist.
          </p>
  
          {/* Buttons - only on desktop */}
          <div className="hidden lg:flex mt-8 gap-4">
            <button className="border-2 border-black px-6 py-3 font-medium hover:bg-black hover:text-white transition">
              Buch kaufen - 10 €
            </button>
            <button className="bg-black text-white px-6 py-3 font-medium hover:bg-black/80 transition">
              Buch kaufen - Soli 20 €
            </button>
          </div>
        </div>
  
        {/* Right Image Placeholder */}
        <div className="flex-1 w-full lg:flex lg:justify-center">
          <div className="w-full lg:max-w-md h-96 bg-linear-to-b from-pink/30 via-blue/30 to-green/30 flex items-center justify-center">
            <span className="text-black/50">Buch-Bild</span>
          </div>
        </div>
  
        {/* Buttons - only on mobile/tablet */}
        <div className="flex lg:hidden flex-col sm:flex-row justify-center items-center gap-4 px-8 py-8">
            <button className="border-2 border-black px-6 py-3 font-medium hover:bg-black hover:text-white transition">
                Buch kaufen - 10 €
            </button>
            <button className="bg-black text-white px-6 py-3 font-medium hover:bg-black/80 transition">
                Buch kaufen - Soli 20 €
            </button>
        </div>
      </section>
    )
  }
  
  export default Hero
  